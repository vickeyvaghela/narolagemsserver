const models = require('express').Router();
const jwt = require('jsonwebtoken');

const { poolPromise } = require('../../db');
const sql = require("mssql");




models.get('/', (req, res) => {
    res.send('default route for auth service FRONT');
});

models.post('/loginBkp', async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    if(req.body.username && req.body.password){


        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(30), req.body.username);

            request = await request.execute('WB_UserLoginAuthentication')

            let recordsets = request;

            if(recordsets && recordsets.recordsets && recordsets.recordsets[0] && recordsets.recordsets[0][0] && recordsets.recordsets[0][0].UserId && recordsets.recordsets[0][0].Password){

                if(recordsets.recordsets[0][0].UserId == req.body.username && req.body.password==recordsets.recordsets[0][0].Password){


                    if(recordsets.recordsets[0][0].Active){
                        var token = jwt.sign({userID: req.body.username}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
                        res.send({token,UserId:recordsets.recordsets[0][0].UserId,EMailId:recordsets.recordsets[0][0].EMailId,CompanyName:recordsets.recordsets[0][0].CompanyName,success:true});
                    }else{
                        res.json({success:false,message:"Your account is not active"})
                    }

                }else{
                    res.json({success:false,message:"Invalid Username or Password 1"})
                }
            }else{
                res.json({success:false,message:"Invalid Username or Password 2"})
            }

        } catch (err) {
            console.log(err);
            res.json({success: false, data: null})
        }

    }else{
        res.json({success:false,message:"Invalid Username or Password"})
    }
});

models.post('/login', async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    if(req.body.username && req.body.password){


        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(30), req.body.username);

            request = await request.execute('WB_UserLoginAuthentication')

            let recordsets = request;

            if(recordsets && recordsets.recordsets && recordsets.recordsets[0] && recordsets.recordsets[0][0] && recordsets.recordsets[0][0].UserId && recordsets.recordsets[0][0].Password){

                //if(recordsets.recordsets[0][0].UserId == req.body.username && req.body.password==recordsets.recordsets[0][0].Password){
                if(recordsets.recordsets[0][0].UserId == req.body.username){


                    if(recordsets.recordsets[0][0].Active){



                        ///////////////////////////////////
                        const bcrypt = require('bcrypt');
                        let result = await bcrypt.compare(req.body.password, recordsets.recordsets[0][0].Password)
                        if(result){
                            var token = jwt.sign({userID: req.body.username}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
                            res.send({token,UserId:recordsets.recordsets[0][0].UserId,EMailId:recordsets.recordsets[0][0].EMailId,CompanyName:recordsets.recordsets[0][0].CompanyName,success:true});
                        }else{
                            res.json({success:false,message:"Invalid Username or Password"})

                        }







                    }else{
                        res.json({success:false,message:"Your account is not active"})
                    }

                }else{
                    res.json({success:false,message:"Invalid Username or Password 1"})
                }
            }else{
                res.json({success:false,message:"Invalid Username or Password 2"})
            }

        } catch (err) {
            console.log(err);
            res.json({success: false, data: null})
        }

    }else{
        res.json({success:false,message:"Invalid Username or Password"})
    }
});

models.post('/onforgotPwdFormubmit', async (req, res) => {



    if(req.body.emailid && req.body.username){

        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(100), req.body.username);

            request = await request.execute('WB_UserIdEmailIdCheck')


            console.log(request.recordset[0]);

            if(request.recordset && request.recordset[0]){
                if(req.body.emailid==request.recordset[0].EmailId){


                    const bcrypt = require('bcrypt');
                    const saltRounds = 12;


                    var pwd = generateRandStr();
                    let hash = await bcrypt.hash(pwd, saltRounds)

                    console.log('this is new pwd '+pwd);
                    console.log('this is new hash '+hash);

                    let request = await pool.request()
                    request.input('UserId', sql.VarChar(100), req.body.username);
                    request.input('Password', sql.VarChar(256), hash);

                    await request.execute('WB_WPassMastForgotPassUpdate')

                    let NM = require('../helpers/nodemailer');

                    let TemplateVars = { newpwd:pwd,year:new Date().getFullYear()};
                    NM.sendHtml(req.body.emailid,'../../public/html/ChangePwd.html',TemplateVars,'Narola Gems - Password Changed')

                    res.send({success: true,data: 111})
                }else{
                    res.send({success: false,data: null,msg:'Email does not match'})
                }
            }else{
                res.send({success: false,data: 222,msg:'Username not found in the database'})
            }


        } catch (err) {
            console.log(err);
            res.json({success: false, data: 333,err:err})
        }


    }else{
        res.json({success: false, data: 444})
    }

});


models.post('/fileUpload', (req, res) => {


    let fileNameAry = [];

    var multer = require('multer');
    const storage = multer.diskStorage({
        destination: "public/images",
        filename: function(req, file, cb){
            let fileName = file.fieldname +'-'+ generateRandStr() +'-' + Date.now()+'.'+file.originalname.split('.').pop();
            fileNameAry.push(fileName)
            cb(null, fileName)
        }
    });

    const upload = multer({ storage: storage }).fields([{name: "profilePic"},{name: "businessId"}]);

    upload(req, res, (err) => {

        res.json(fileNameAry)

        if (err) throw err;
    });
});


models.get('/fileUploadAzure', async (req, res) => {

    return;
    azureUpload1('profilePic-b709u2ub2n-1588823789920.PNG','PNG','gfaafasf');
    res.send('sssssit')
});

function azureUpload1(name,ext,username) {
    const azureStorage = require('azure-storage')
    const blobService = azureStorage.createBlobService()
    const containerName = 'hdfile'
    const path = require('path');

    // const azureImageName = 'WebRegImg/'+req.body.UserId+'_p.'+req.body.uploadedProfilePicExt;
    // const nodeImageName = path.join(__dirname, '../../public/images/'+req.body.uploadedProfilePicName)

    const azureImagePath = 'WebRegImg/'+username+'_p.'+ext;
    const nodeImagePath = path.join(__dirname, '../../public/images/'+name)

    blobService.createBlockBlobFromLocalFile(containerName, azureImagePath, nodeImagePath, function(error, result, response) {
        if (!error) {
            resolve();
        }else{
            reject();
        }
    })
}


function azureUpload(name,ext,username,suffix) {
    const azureStorage = require('azure-storage')
    const blobService = azureStorage.createBlobService()
    const containerName = 'hdfile'
    const path = require('path');
    const fs = require('fs')

    // const azureImageName = 'WebRegImg/'+req.body.UserId+'_p.'+req.body.uploadedProfilePicExt;
    // const nodeImageName = path.join(__dirname, '../../public/images/'+req.body.uploadedProfilePicName)

    const azureImagePath = 'WebRegImg/'+username+suffix+'.'+ext;
    const nodeImagePath = path.join(__dirname, '../../public/images/'+name)

    return new Promise(function(resolve, reject) {
        blobService.createBlockBlobFromLocalFile(containerName, azureImagePath, nodeImagePath, function(error, result, response) {

            try { fs.unlinkSync(nodeImagePath) } catch(err) { console.error(err) }

            if (!error) {
                resolve();
            }else{
                reject();
            }
        })
    });
}

models.post('/existUsername', async (req, res) => {
    if(req.body.UserId){

        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(100), req.body.UserId);

            request = await request.execute('WB_UserIdEmailIdCheck')


            if(request.recordset && request.recordset[0]){
                res.json({success: false,data: [],msg:'Username is already taken. Please use another username'})
            }else{
                res.json({success: false,data: []})
            }


        } catch (err) {
            console.log(err);
            res.json({success: false, data: 333})
        }


    }else{
        res.json({success: false, data: 444})
    }
})


models.post('/signup', async (req, res) => {





    if(req.body.UserId){
        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(100), req.body.UserId);

            request = await request.execute('WB_UserIdEmailIdCheck')


            if(request.recordset && request.recordset[0]){
                res.json({success: false,data: []})
            }else{








                if(req.body.uploadedProfilePicName){
                    await azureUpload(req.body.uploadedProfilePicName,req.body.uploadedProfilePicExt,req.body.UserId,'_p')
                }
                if(req.body.uploadedBusinessPicName){
                    await azureUpload(req.body.uploadedBusinessPicName,req.body.uploadedBusinessPicExt,req.body.UserId,'_b')
                }

                const pool = await poolPromise;
                let request = await pool.request()

                const bcrypt = require('bcrypt');
                const saltRounds = 12;
                let hashedPwd = await bcrypt.hash(req.body.Password, saltRounds)

                if(req.body.uploadedProfilePicName){  request.input('PhotoProofPath', sql.VarChar(8000), req.body.UserId+'_p.'+req.body.uploadedProfilePicExt); }
                if(req.body.uploadedBusinessPicName){  request.input('BusinessProofPath', sql.VarChar(8000), req.body.UserId+'_b.'+req.body.uploadedBusinessPicExt); }
                if(req.body.uploadedProfilePicExt){  request.input('PhotoProofExt', sql.VarChar(50), req.body.uploadedProfilePicExt); }
                if(req.body.uploadedBusinessPicExt){  request.input('BusinessPhotoProofExt', sql.VarChar(50), req.body.uploadedBusinessPicExt); }


                request.input('UserId', sql.VarChar(50), req.body.UserId);
                request.input('Password', sql.VarChar(256), hashedPwd);
                request.input('FirstName', sql.VarChar(100), req.body.FirstName);
                request.input('LastName', sql.VarChar(100), req.body.LastName);
                request.input('COMPANY', sql.VarChar(300), req.body.COMPANY);
                request.input('Address', sql.VarChar(500), req.body.Address);
                request.input('EMailId', sql.VarChar(50), req.body.EMailId);
                request.input('SecondaryEMailId', sql.VarChar(50), req.body.SecondaryEMailId);
                request.input('MobileNo', sql.VarChar(18), req.body.MobileNo);
                request.input('Desig', sql.VarChar(50), req.body.Desig);
                request.input('PinCode', sql.VarChar(15), req.body.PinCode);
                request.input('Phone', sql.VarChar(20), req.body.Phone);
                request.input('Fax', sql.VarChar(20), req.body.Fax);
                request.input('BusinessType', sql.VarChar(50), req.body.BusinessType);
                request.input('HowKnow', sql.VarChar(50), req.body.HowKnow);
                request.input('QQ_ID', sql.VarChar(50), req.body.QQ_ID);
                request.input('SKYPE_ID', sql.VarChar(50), req.body.SKYPE_ID);
                request.input('WECHAT_ID', sql.VarChar(50), req.body.WECHAT_ID);
                request.input('WHATSAPP_ID', sql.VarChar(50), req.body.WHATSAPP_ID);

                request.input('SPCODE', sql.VarChar(50), req.body.SPCODE);
                request.input('Sex', sql.VarChar(2), req.body.Sex);

                request.input('MobCode', sql.VarChar(10), req.body.MobCode);
                request.input('PCCode', sql.VarChar(10), req.body.PCCode);
                request.input('FCCode', sql.VarChar(10), req.body.FCCode);

                request.input('ConId', sql.Int, req.body.ConId);
                request.input('StatId', sql.Int, req.body.StatId);
                request.input('CityId', sql.Int, req.body.CityId);
                request.input('ConName', sql.VarChar(50), req.body.ConName);
                request.input('StateName', sql.VarChar(50), req.body.StateName);
                request.input('CityName', sql.VarChar(50), req.body.CityName);

                request.input('Locked', sql.Bit, true);


                if(req.body.ipAdd && req.body.ipAdd.ip){
                    request.input('IP', sql.VarChar(200), req.body.ipAdd.ip);
                }


                request = await request.execute('WB_RegistrationSave')

                let NM = require('../helpers/nodemailer');
                let TemplateVarsAdmin = { client_id :req.body.UserId, client_password :req.body.Password, client_name :req.body.FirstName+' '+req.body.LastName, client_company :req.body.COMPANY, client_email :req.body.EMailId, year:new Date().getFullYear()};
                let TemplateVarsUser = { client_name :req.body.FirstName+' '+req.body.LastName, year:new Date().getFullYear()};

                NM.sendHtml('ashishpsavaliya@gmail.com','../../public/html/Admin.html',TemplateVarsAdmin,'Narola Gems - Registration Request')
                NM.sendHtml(req.body.EMailId,'../../public/html/User.html',TemplateVarsUser,'Narola Gems - Registration Request')
                res.json({success: true, data: null})


            }


        } catch (err) {
            console.log(err);
            res.json({success: false, data: 333})
        }
    }else{
        res.json({success: false, data: null})
    }


})



function generateRandStr() {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}





models.post('/getKamPersons', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('WB_GetSalesPersonList')


        if(request.recordset){
            res.json({success: true, data: request.recordset})
        }else{
            res.json({success: true, data: null})
        }


        //res.json(result.recordset)
    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});

models.post('/getCountry', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('WB_FrmCountryMastFill')


        if(request.recordset){
            res.json({success: true, data: request.recordset})
        }else{
            res.json({success: true, data: null})
        }

    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});

models.post('/getState', async (req, res) => {


    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('CON_CODE', sql.Int, req.body.CON_CODE);

        request = await request.execute('WB_FrmRegionMastFill')


        if(request.recordset){
            res.json({success: true, data: request.recordset})
        }else{
            res.json({success: true, data: null})
        }

    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});

models.post('/getCity', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('REG_CODE', sql.Int, req.body.REG_CODE);
        request.input('CON_CODE', sql.Int, req.body.CON_CODE);

        request = await request.execute('WB_FrmCityMastFill')


        if(request.recordset){
            res.json({success: true, data: request.recordset})
        }else{
            res.json({success: true, data: null})
        }

    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});



models.get('/encryptPwd', async (req, res) => {


    return;

    var forEach = require('async-foreach').forEach;
    const bcrypt = require('bcrypt');
    const saltRounds = 12;

    try {
        const pool = await poolPromise;

        let request = await pool.request()


        request = await request.execute('usp_FrmPassDecryptFill')


        forEach(request.recordset, async function(item, index, arr) {


            //console.log("each", item, index, arr);
            console.log(index);
            var done = this.async();

            let hash = await bcrypt.hash(item.O_Password, saltRounds)

            let request = await pool.request()

            request.input('CustId', sql.Int, item.CustId);
            request.input('UserId', sql.VarChar(128), item.UserId);
            request.input('Pass', sql.VarChar(256), hash);
            request = await request.execute('usp_FrmPassDecryptUpdate')


            done();

        }, allDone);

        function allDone(notAborted, arr) {
            //console.log("done", notAborted, arr);
            console.log("done", notAborted);

        }

        res.send('started')


    } catch (err) {
        console.log(err);
        res.json(err)
    }
});

models.get('/comparePwd', async (req, res) => {


    const bcrypt = require('bcrypt');
    const saltRounds = 12;
    const password = 'rahul';



    let result = await bcrypt.compare(password, '$2b$12$ZHGagpR5PfFm0N338G6e8uKSGRWirmC6ns.Kn55ION1ILaSMP2UZ.')
    console.log(result);
    res.send(result)
});




models.get('/mailtest', async (req, res) => {


    var path = require('path');
    var fs = require('fs');
    let NM = require('../helpers/nodemailer');
    var handlebars = require('handlebars');



    fs.readFile(path.join(__dirname, '../../public/html/User.html'), {encoding: 'utf-8'}, function (err, html) {
        console.log(html);


        var source = html;
        var template = handlebars.compile(source);


        var data = {
            client_id :"ashiss#idd",
            client_password :"nlaihfle",
            client_name :"Ashish Savaliya",
            client_company :"Adis Tech",
            client_email :"ashishpsavaliya@gmail.com"
        };
        var result = template(data);


        res.send(result);


        var mailOptions = {
            from: 'test@gmail.com',
            to: 'ashishpsavaliya@gmail.com',
            subject: 'Stone Details',
            html: result
        };
        //NM.sendSingle(mailOptions)

    });

});


module.exports = models;
