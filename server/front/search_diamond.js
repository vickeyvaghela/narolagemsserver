const route = require('express').Router();
const { poolPromise } = require('../../db');

const sql = require("mssql");
// const config = {
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     server: process.env.DB_SERVER,
//     database: process.env.DB_DATABASE,
//     options:{encrypt:false},
//     port:parseInt(process.env.DB_PORT)
// };




route.get('/', (req, res) => {
    res.send('default route for userpanel FRONT');
});


route.post('/saveSearch', async (req, res) => {



    // console.log(JSON.stringify(req.body));
    // res.json({success: true, data: []})
    // return;


    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('UserId', sql.VarChar(50), req.body.UserId);

        if(req.body.SearchName){ request.input('SearchName', sql.VarChar(100), parseInt(req.body.SearchName)); }

        if(req.body.StoneList){
            request.input('StoneList', sql.VarChar(30), req.body.StoneList);
        }else{

            if(req.body.whiteColor){
                request.input('IsFancy', sql.Bit, false);
            }else{
                request.input('IsFancy', sql.Bit, true);

                if(req.body.IntenSity){ request.input('IntenSity', sql.VarChar(30), req.body.IntenSity); }
                if(req.body.Overtone){ request.input('Overtone', sql.VarChar(30), req.body.Overtone); }
                if(req.body.Fancycolor){ request.input('Fancycolor', sql.VarChar(30), req.body.Fancycolor); }

            }

            if(req.body.SearchName){ request.input('SearchName', sql.VarChar(30), req.body.SearchName); }
            if(req.body.S_Code){ request.input('S_Code', sql.VarChar(30), req.body.S_Code); }
            if(req.body.Col_Code){ request.input('Col_Code', sql.VarChar(30), req.body.Col_Code); }
            if(req.body.Clarity_Code){ request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code); }
            if(req.body.Cut_Code){ request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code); }
            if(req.body.Symmetry_Code){ request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code); }
            if(req.body.Fluorescence_Code){ request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code); }
            if(req.body.Lab_Code){ request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code); }
            if(req.body.Polish_Code){ request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code); }
            if(req.body.EyeClean_Code){ request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code); }
            if(req.body.LocationCode){ request.input('LocationCode', sql.VarChar(30), req.body.LocationCode); }
            if(req.body.Lust_Code){ request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code); }
            if(req.body.HA_Code){ request.input('HA_Code', sql.VarChar(400), req.body.HA_Code); }
            if(req.body.Origin){ request.input('Origin', sql.VarChar(400), req.body.Origin); }


            if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }else{ request.input('FCarat', sql.Int, 0); }
            if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }else{ request.input('TCarat', sql.Int, 0); }
            if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }else{ request.input('FLowerHalf', sql.Int, 0); }
            if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }else{ request.input('FLowerHalf', sql.Int, 0); }
            if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }else{ request.input('FDepth', sql.Int, 0); }
            if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }else{ request.input('TDepth', sql.Int, 0); }
            if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }else{ request.input('FStarLength', sql.Int, 0); }
            if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }else{ request.input('TStarLength', sql.Int, 0); }
            if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }else{ request.input('FCAngle', sql.Int, 0); }
            if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }else{ request.input('TCAngle', sql.Int, 0); }
            if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }else{ request.input('FPAngle', sql.Int, 0); }
            if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }else{ request.input('TPAngle', sql.Int, 0); }
            if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }else{ request.input('FDiscount', sql.Int, 0); }
            if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }else{ request.input('TDiscount', sql.Int, 0); }
            if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }else{ request.input('FTable', sql.Int, 0); }
            if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }else{ request.input('TTable', sql.Int, 0); }
            if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }else{ request.input('FRatio', sql.Int, 0); }
            if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }else{ request.input('TRatio', sql.Int, 0); }
            if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }else{ request.input('FDiameter', sql.Int, 0); }
            if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }else{ request.input('TDiameter', sql.Int, 0); }
            if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }else{ request.input('FGirdle', sql.Int, 0); }
            if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }else{ request.input('TGirdle', sql.Int, 0); }
            if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }else{ request.input('FPHeight', sql.Int, 0); }
            if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }else{ request.input('TPHieght', sql.Int, 0); }
            if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }else{ request.input('FCHeight', sql.Int, 0); }
            //if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }else{ request.input('TCHieght', sql.Int, 0); }

            if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }else{ request.input('FMeasHeight', sql.Int, 0); }
            if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }else{ request.input('TMeasHeight', sql.Int, 0); }
            if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }else{ request.input('FMeasLength', sql.Int, 0); }
            if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }else{ request.input('TMeasLength', sql.Int, 0); }
            if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }else{ request.input('FMeasWidth', sql.Int, 0); }
            if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }else{ request.input('TMeasWidth', sql.Int, 0); }


            if(req.body.Shade_Code){ request.input('BSHD_CODE', sql.VarChar(30), req.body.Shade_Code); }

        }

        request = await request.execute('WB_SaveSearch')

        res.json({success: true, data: request.recordset})




        //res.json(result.recordset)
    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});

route.post('/searchDiamond', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('UserId', sql.VarChar(30), req.body.UserId);
        if(req.body.StoneList){
            request.input('StoneList', sql.VarChar(30), req.body.StoneList);
        }else{


            if(req.body.whiteColor){
                request.input('IsFancy', sql.Int, 0);
            }else{
                request.input('IsFancy', sql.Int, 1);
            }


            request.input('S_Code', sql.VarChar(30), req.body.S_Code);

            if(req.body.Col_Code){
                request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
            }


            request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code);
            request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code);
            request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code);
            request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code);
            request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code);
            request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code);
            request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code);
            request.input('LocationCode', sql.VarChar(30), req.body.LocationCode);
            request.input('Origin', sql.VarChar(30), req.body.Origin);
            request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code);
            request.input('HA_Code', sql.VarChar(400), req.body.HA_Code);

            if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
            if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
            if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
            if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
            if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
            if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
            if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
            if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
            if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
            if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
            if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
            if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
            if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
            if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
            if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
            if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
            if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
            if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
            if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
            if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
            if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
            if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
            if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
            if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
            if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
            if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
            if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
            if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

            if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
            if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
            if(req.body.FromI_date){ request.input('FromI_date', sql.VarChar(30), req.body.FromI_date); }
            if(req.body.ToI_Date){ request.input('ToI_Date', sql.VarChar(30), req.body.ToI_Date); }

            if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
            if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
            if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
            if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
            if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
            if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }

            if(req.body.shade){ request.input('BSHD_CODE', sql.VarChar(30), req.body.shade); }

        }

        request = await request.execute('WB_DiamondResultFill')


        res.json({success: true, data: request.recordset})




        //res.json(result.recordset)
    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});
route.post('/getResultCount', async (req, res) => {


    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('UserId', sql.VarChar(30), req.body.UserId);
        request.input('S_Code', sql.VarChar(30), req.body.S_Code);

        if(req.body.Col_Code){
            request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
        }


        request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code);
        request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code);
        request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code);
        request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code);
        request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code);
        request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code);
        request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code);
        request.input('LocationCode', sql.VarChar(30), req.body.LocationCode);
        request.input('Origin', sql.VarChar(30), req.body.Origin);
        request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code);
        request.input('HA_Code', sql.VarChar(400), req.body.HA_Code);

        if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
        if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
        if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
        if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
        if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
        if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
        if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
        if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
        if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
        if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
        if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
        if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
        if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
        if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
        if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
        if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
        if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
        if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
        if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
        if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
        if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
        if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
        if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
        if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
        if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
        if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
        // if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
        // if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

        if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
        if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
        if(req.body.FromI_date){ request.input('FromI_date', sql.VarChar(30), req.body.FromI_date); }
        if(req.body.ToI_Date){ request.input('ToI_Date', sql.VarChar(30), req.body.ToI_Date); }


        if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
        if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
        if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
        if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
        if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
        if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }

        if(req.body.shade){ request.input('BSHD_CODE', sql.VarChar(30), req.body.shade); }


        if(req.body.whiteColor){ request.input('IsFancy', sql.Int, 0); }else{ request.input('IsFancy', sql.Int, 1); }

        request = await request.execute('WB_DiamondResultCount')


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


route.post('/fancyintensity', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('SP_FancyColIntensityDisp')

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
route.post('/fancyovertone', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('SP_FancyColOvertoneDisp')

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
route.post('/fancycolor', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('SP_FancyColColorDisp')

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


route.post('/getLocations', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('SP_MastLocMastFill')

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
route.post('/getOrigins', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('SP_FrmOriginSearch')

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

route.post('/getShade', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('SP_MastBrnShdMastFill')

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

route.post('/getHNAMst', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('SP_MastHAMastFill')

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

route.post('/getLUSTMst', async (req, res) => {


    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request = await request.execute('SP_MastLustMastFill')

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


route.post('/downloadPDF', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('UserId', sql.VarChar(30), req.body.UserId?req.body.UserId:"");


        let spname = '';
        if(!req.body.isBasketTabOpen){
            spname = 'WB_DiamondResultFill';

            if(req.body.StoneList){
                request.input('StoneList', sql.VarChar(30), req.body.StoneList);
            }else{

                if(req.body.whiteColor && req.body.whiteColor=="true"){
                    request.input('IsFancy', sql.Int, 0);
                }else{
                    request.input('IsFancy', sql.Int, 1);
                }

                request.input('S_Code', sql.VarChar(30), req.body.S_Code?req.body.S_Code:"");

                if(req.body.Col_Code){
                    request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
                }


                request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code?req.body.Clarity_Code:"");
                request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code?req.body.Cut_Code:"");
                request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code?req.body.Symmetry_Code:"");
                request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code?req.body.Fluorescence_Code:"");
                request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code?req.body.Lab_Code:"");
                request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code?req.body.Polish_Code:"");
                request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code?req.body.EyeClean_Code:"");
                request.input('LocationCode', sql.VarChar(30), req.body.LocationCode?req.body.LocationCode:"");
                request.input('Origin', sql.VarChar(30), req.body.Origin?req.body.Origin:"");
                request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code?req.body.Lust_Code:"");
                request.input('HA_Code', sql.VarChar(400), req.body.HA_Code?req.body.HA_Code:"");

                if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
                if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
                if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
                if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
                if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
                if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
                if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
                if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
                if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
                if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
                if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
                if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
                if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
                if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
                if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
                if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
                if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
                if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
                if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
                if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
                if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
                if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
                if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
                if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
                if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
                if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
                if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
                if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

                if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
                if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
                if(req.body.FromI_date){ request.input('FromI_date', sql.VarChar(30), req.body.FromI_date); }
                if(req.body.ToI_Date){ request.input('ToI_Date', sql.VarChar(30), req.body.ToI_Date); }

                if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
                if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
                if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
                if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
                if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
                if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }
            }

        }else{
            spname = 'WB_BasketStoneDisplay';
        }





        request = await request.execute(spname)


        if(request.recordset){

            var path = require('path');
            var PdfPrinter = require('../libs/pdfkit/src/printer');
            var fs = require('fs');
            var printer = new PdfPrinter({
                Roboto: {
                    normal: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Regular.ttf'),
                    bold: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Regular.ttf'),
                    italics: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Italic.ttf'),
                    bolditalics: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-MediumItalic.ttf'),
                    layout : 'landscape'
                }
            });

            

            var tblbodyBkp = [

                //table header
                [
                    { text: "Particulars vijanan", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "Schedule Date", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "Amount", style: ['tblhead'],border: [false, false, false, false]},
                ],


                //tbody
                [
                    { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                ],
                [
                    { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                ],
                [
                    { text: "kkkkkkk",style: ['tbldata'],border: [false, false, false, false]},
                    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                    { text:12,style: ['tbldata'],border: [false, false, false, false]},
                ],
                [
                    { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                ],
                [
                    { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                ],
                [
                    { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
                    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
                    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
                ],


                //table footer
                // [
                //   { text: "", style: ['tbldata'], border: [false, false, false, false]},
                //   { text: "", style: ['tbldata'], border: [false, false, false, false]},
                //   { text:"Paid Amount : ₹ 18585", style: ['tbldata'], border: [false, true, false, false]}
                // ],

            ];

            var tblbody = [
                [
                    { text: "PId kkm", style: ['tblhead'],border: [false, false, false, false]},
                    // { text: "IsBPD", style: ['tblhead'],border: [false, false, false, false]},
                    // { text: "EVENTPKTNO", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "S_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "Carat", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "GC_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "GQ_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "GCT_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "GPO_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "GSY_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "GFL_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "GRap", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "Disc", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "GRate", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "CR_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "NGS", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "EC_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "BSHD_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "Meas", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "TotDepth", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "Table1", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "Ratio", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "origin", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "Loc_Name", style: ['tblhead'],border: [false, false, false, false]},
                    { text: "CertNo", style: ['tblhead'],border: [false, false, false, false]},
                ]
            ];
            request.recordset.forEach(function(record) {
                tblbody.push(
                    [
                        { text: record["PId"]?record["PId"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        // { text: record["IsBPD"]?record["IsBPD"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        // { text: record["EVENTPKTNO"]?record["EVENTPKTNO"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["S_Name"]?record["S_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["Carat"]?record["Carat"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["GC_Name"]?record["GC_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["GQ_Name"]?record["GQ_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["GCT_Name"]?record["GCT_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["GPO_Name"]?record["GPO_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["GSY_Name"]?record["GSY_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["GFL_Name"]?record["GFL_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["GRap"]?record["GRap"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["Disc"]?record["Disc"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["GRate"]?record["GRate"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["CR_Name"]?record["CR_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["NGS"]?record["NGS"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["EC_Name"]?record["EC_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["BSHD_Name"]?record["BSHD_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["Meas"]?record["Meas"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["TotDepth"]?record["TotDepth"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["Table1"]?record["Table1"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["Ratio"]?record["Ratio"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["origin"]?record["origin"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["Loc_Name"]?record["Loc_Name"]:'', style: ['tbldata'],border: [false, false, false, false]},
                        { text: record["CertNo"]?record["CertNo"]:'', style: ['tbldata'],border: [false, false, false, false]},
                    ]
                )
            });

            var docDefinitioncreated = {
                content: [
                    {

                        alignment:"justify",
                        table: {
                            //widths: [161,161,161],
                            //heights: [23,23,23],
                            body: tblbody,
                        },
                        // layout: 'lightHorizontalLines',

                    }
                ],
                styles: {
                    header: { fontSize: 10 },
                    bigger: { fontSize: 10, italics: true },
                    tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, alignment:"center" },
                    tbldata: { alignment:"center" }
                },
                // styles: {
                //     header: { fontSize: 18 },
                //     bigger: { fontSize: 15, italics: true },
                //     tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, margin: [5, 5], alignment:"center" },
                //     tbldata: { margin: [0, 3], alignment:"center" }
                // },
                defaultStyle: { columnGap: 1 }
            };

            var pdfDoc = printer.createPdfKitDocument(docDefinitioncreated);


            let buffers = [];
            pdfDoc.on('data', buffers.push.bind(buffers));
            pdfDoc.on('end', () => {

                let pdfData = Buffer.concat(buffers);
                res.writeHead(200, {
                    'Content-Length': Buffer.byteLength(pdfData),
                    'Content-Type': 'application/pdf',
                    'Content-disposition': 'attachment;filename=list.pdf',}).end(pdfData);

            });
            pdfDoc.end();

        }else{
            res.json({success: true, data: null})
        }

    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});

route.post('/downloadXLS', async (req, res) => {

    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('UserId', sql.VarChar(30), req.body.UserId?req.body.UserId:"");

        let spname = '';
        if(!req.body.isBasketTabOpen){
            spname = 'WB_DiamondResultFill';

            if(req.body.StoneList){
                request.input('StoneList', sql.VarChar(30), req.body.StoneList);
            }else{

                if(req.body.whiteColor && req.body.whiteColor=="true"){
                    request.input('IsFancy', sql.Int, 0);
                }else{
                    request.input('IsFancy', sql.Int, 1);
                }

                request.input('S_Code', sql.VarChar(30), req.body.S_Code?req.body.S_Code:"");

                if(req.body.Col_Code){
                    request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
                }


                request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code?req.body.Clarity_Code:"");
                request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code?req.body.Cut_Code:"");
                request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code?req.body.Symmetry_Code:"");
                request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code?req.body.Fluorescence_Code:"");
                request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code?req.body.Lab_Code:"");
                request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code?req.body.Polish_Code:"");
                request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code?req.body.EyeClean_Code:"");
                request.input('LocationCode', sql.VarChar(30), req.body.LocationCode?req.body.LocationCode:"");
                request.input('Origin', sql.VarChar(30), req.body.Origin?req.body.Origin:"");
                request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code?req.body.Lust_Code:"");
                request.input('HA_Code', sql.VarChar(400), req.body.HA_Code?req.body.HA_Code:"");

                if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
                if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
                if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
                if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
                if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
                if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
                if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
                if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
                if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
                if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
                if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
                if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
                if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
                if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
                if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
                if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
                if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
                if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
                if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
                if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
                if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
                if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
                if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
                if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
                if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
                if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
                if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
                if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

                if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
                if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
                if(req.body.FromI_date){ request.input('FromI_date', sql.VarChar(30), req.body.FromI_date); }
                if(req.body.ToI_Date){ request.input('ToI_Date', sql.VarChar(30), req.body.ToI_Date); }


                if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
                if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
                if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
                if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
                if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
                if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }
            }

        }else{
            spname = 'WB_BasketStoneDisplay';
        }




        request = await request.execute(spname)


        if(request.recordset){

            let recordsets = request;

            if(recordsets && recordsets.recordset && recordsets.recordset){

                const Excel = require('exceljs');
                const fs = require('fs');
                const path = require('path');
                const workbook = new Excel.Workbook();
                const worksheet = workbook.addWorksheet("Narola Gems");

                worksheet.columns = [
                    {header: 'srno', key: 'srno', width: 7},
                    {header: 'PId', key: 'PId', width: 10},
                    {header: 'S_Name', key: 'S_Name', width: 12},
                    {header: 'GC_Name', key: 'GC_Name', width: 20},
                    {header: 'GQ_Name', key: 'GQ_Name', width: 10},
                    {header: 'Carat', key: 'Carat', width: 10},
                    {header: 'GRap', key: 'GRap', width: 10},
                    {header: 'Disc', key: 'Disc', width: 10},
                    {header: 'GRate', key: 'GRate', width: 10},
                    {header: 'Total', key: 'Total', width: 10},
                    {header: 'GCT_Name', key: 'GCT_Name', width: 9},
                    {header: 'GPO_Name', key: 'GPO_Name', width: 9},
                    {header: 'GSY_Name', key: 'GSY_Name', width: 9},
                    {header: 'GFL_Name', key: 'GFL_Name', width: 10},
                    {header: 'CR_Name', key: 'CR_Name', width: 10},
                    {header: 'CertNo', key: 'CertNo', width: 10},
                    {header: 'Meas', key: 'Meas', width: 10},
                    {header: 'TotDepth', key: 'TotDepth', width: 10},
                    {header: 'Table1', key: 'Table1', width: 10},
                    {header: 'BSHD_Name', key: 'BSHD_Name', width: 10},
                    {header: 'NGS', key: 'NGS', width: 10},
                    {header: 'EC_Name', key: 'EC_Name', width: 10},
                ];

                [1,2,3,4].forEach(function(record) {
                    worksheet.addRow({
                        srno: 'SrNo',
                        PId: 'StoneId',
                        S_Name: 'Shape',
                        GC_Name: 'Color',
                        GQ_Name: 'Clarity',
                        Carat: 'Carat',
                        GRap: 'Rap',
                        Disc: 'Disc%',
                        GRate: 'PerCarat',
                        Total: 'Amount',
                        GCT_Name: 'Cut',
                        GPO_Name: 'Pol',
                        GSY_Name: 'Sym',
                        GFL_Name: 'Flo',
                        CR_Name: 'Lab',
                        CertNo: 'ReportNo',
                        Meas: 'Measurement',
                        TotDepth: 'Depth%',
                        Table1: 'Table%',
                        BSHD_Name: 'Shade',
                        NGS: 'NGS Comment',
                        EC_Name: 'EyeClean',
                    });
                });

                recordsets.recordset.forEach(function(record,index) {
                    worksheet.addRow({
                        srno: index+1,
                        PId: record['PId'],
                        S_Name: record['S_Name'],
                        GC_Name: record['GC_Name'],
                        GQ_Name: record['GQ_Name'],
                        Carat: record['Carat'],
                        GRap: record['GRap'],
                        Disc: record['Disc'],
                        GRate: record['GRate'],
                        Total: record['Total'],
                        GCT_Name: record['GCT_Name'],
                        GPO_Name: record['GPO_Name'],
                        GSY_Name: record['GSY_Name'],
                        GFL_Name: record['GFL_Name'],
                        CR_Name: record['CR_Name'],
                        CertNo: record['CertNo'],
                        Meas: record['Meas'],
                        TotDepth: record['TotDepth'],
                        Table1: record['Table1'],
                        BSHD_Name: record['BSHD_Name'],
                        NGS: record['NGS'],
                        EC_Name: record['EC_Name'],
                    });
                });

                let totalCts = avgRap = avgDisc = ctRate = totAmount = fCtRate = fTotAmount = 0;
                totalCts = recordsets.recordset.reduce((acc, val) => {
                    return acc + parseFloat(val.Carat);
                },0);

                avgRap = recordsets.recordset.reduce((acc, val) => {
                    return acc + (parseFloat(val.Carat)*parseFloat(val.GRap));
                },0);
                avgRap/=totalCts;
                avgRap = avgRap.toFixed(2);

                totAmount = recordsets.recordset.reduce((acc, val) => {
                    return acc + parseFloat(val.Total);
                },0);
                totAmount = totAmount.toFixed(2);

                ctRate = recordsets.recordset.reduce((acc, val) => {
                    return acc + (parseFloat(val.Carat)*parseFloat(val.GRate));
                },0);
                ctRate/=totalCts;
                ctRate = ctRate.toFixed(2);

                avgDisc = 100-(ctRate/avgRap*100);
                avgDisc = avgDisc.toFixed(2);



                worksheet.getCell('F3').value = totalCts;
                worksheet.getCell('F3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('F4').value = totalCts;
                worksheet.getCell('F4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('G3').value = avgRap;
                worksheet.getCell('G3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('G4').value = avgRap;
                worksheet.getCell('G4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('H3').value = avgDisc;
                worksheet.getCell('H3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('H4').value = avgDisc;
                worksheet.getCell('H4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('I3').value = ctRate;
                worksheet.getCell('I3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('I4').value = ctRate;
                worksheet.getCell('I4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('J3').value = totAmount;
                worksheet.getCell('J3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('J4').value = totAmount;
                worksheet.getCell('J4').font = {color: { argb: '008000' }, bold: true};
                // CALCULATION ENDS


                //worksheet.duplicateRow(1,4,true);
                worksheet.mergeCells('A1:B4');
                worksheet.mergeCells('C1:C2');
                worksheet.getCell('A1').value = '';
                worksheet.getCell('A1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FFFFFF'}};

                worksheet.getCell('C1').value = new Date();
                worksheet.getCell('C1').font = {bold: true};

                worksheet.getCell('C2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'EDDA74'}};

                worksheet.getCell('C3').value = 'Total';
                worksheet.getCell('C3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('C4').value = 'Filtered';
                worksheet.getCell('C4').font = {color: { argb: '008000' }, bold: true};

                worksheet.mergeCells('D1:G1');
                worksheet.getCell('D1').value = 'Total';
                worksheet.getCell('D1').font = { bold: true};
                worksheet.getCell('D1').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('D1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.mergeCells('H1:J1');
                worksheet.getCell('H1').value = 'Rate';
                worksheet.getCell('H1').font = { bold: true};
                worksheet.getCell('H1').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('H1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.mergeCells('D2:E2');
                worksheet.getCell('D2').value = 'Pcs';
                worksheet.getCell('D2').font = {bold: true};
                worksheet.getCell('D2').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('D2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('F2').value = 'Carats';
                worksheet.getCell('F2').font = {bold: true};
                worksheet.getCell('F2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('G2').value = 'Avg Rap';
                worksheet.getCell('G2').font = {bold: true};
                worksheet.getCell('G2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('H2').value = 'Avg Dis';
                worksheet.getCell('H2').font = {bold: true};
                worksheet.getCell('H2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.getCell('I2').value = 'Per Carat Rate';
                worksheet.getCell('I2').font = {bold: true};
                worksheet.getCell('I2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.getCell('J2').value = 'Total Amount';
                worksheet.getCell('J2').font = {bold: true};
                worksheet.getCell('J2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.mergeCells('D3:E3');
                worksheet.getCell('D3').value = '';

                worksheet.mergeCells('D4:E4');
                worksheet.getCell('D4').value = '';

                worksheet.mergeCells('K1:Q4');
                worksheet.getCell('K1').value = '';

                worksheet.mergeCells('R1:Y4');
                worksheet.getCell('R1').value = '';

                var imageId2 = workbook.addImage({
                    buffer: fs.readFileSync(path.join(__dirname, '../../dist/images/EmailLogo.png')),
                    extension: 'png',
                });

                // worksheet.addImage(imageId2, {
                //     tl: { col: 13.4, row: 0.6 },
                //     ext: { width: 60, height: 60 }
                // });

                worksheet.addImage(imageId2, {
                    tl: { col: 0, row: 1 },
                    ext: { width: 120, height: 40 }
                });
                //worksheet.addImage(imageId2, 'K1:Q4');

                worksheet.getRow(5).fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'ADD8E6'}};
                worksheet.getRow(5).font = {bold: true};


                for(let i=1;i<23;i++){
                    worksheet.getColumn(i).alignment = { vertical: 'middle', horizontal: 'center' };
                }
                worksheet.autoFilter = { from: 'A5',to: 'V5'}

                for(let i=1;i<(recordsets.recordset.length+6);i++){
                    worksheet.getRow(i).border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'}};
                    if(recordsets.recordset[i-1] && recordsets.recordset[i-1].PId){
                        worksheet.getCell('B'+(i+5)).value = {
                            text: recordsets.recordset[i-1].PId,
                            hyperlink: 'https://ngnode.azurewebsites.net/stonedetail/'+recordsets.recordset[i-1].PId,
                            tooltip: 'ngnode.azurewebsites.net'
                        }
                        worksheet.getCell('I'+(i+5)).font = {color: { argb: 'FF0000' }}
                        worksheet.getCell('K'+(i+5)).font = {color: { argb: '008000' }}
                        worksheet.getCell('L'+(i+5)).font = {color: { argb: '008000' }}
                        worksheet.getCell('M'+(i+5)).font = {color: { argb: '008000' }}
                    }
                }


                worksheet.getCell('D3').value = recordsets.recordset.length;
                worksheet.getCell('D3').font = {color: { argb: '800080' }, bold: true};
                worksheet.getCell('D4').value = recordsets.recordset.length;
                worksheet.getCell('D4').font = {color: { argb: '008000' }, bold: true};


                workbook.xlsx.writeBuffer().then(function(buffer) {
                    let xlsData = Buffer.concat([buffer]);
                    res.writeHead(200, {
                        'Content-Length': Buffer.byteLength(xlsData),
                        'Content-Type': 'application/vnd.ms-excel',
                        'Content-disposition': 'attachment;filename=allList.xlsx',}).end(xlsData);
                });

            }else{
                res.json({success: false, data: null})
            }

        }else{
            res.json({success: true, data: null})
        }


        //res.json(result.recordset)
    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});

route.post('/mailXLS', async (req, res) => {


    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('UserId', sql.VarChar(30), req.body.UserId?req.body.UserId:"");



        let spname = '';
        if(!req.body.isBasketTabOpen){
            spname = 'WB_DiamondResultFill';

            if(req.body.StoneList){
                request.input('StoneList', sql.VarChar(30), req.body.StoneList);
            }else{

                if(req.body.whiteColor){
                    request.input('IsFancy', sql.Int, 0);
                }else{
                    request.input('IsFancy', sql.Int, 1);
                }

                request.input('S_Code', sql.VarChar(30), req.body.S_Code?req.body.S_Code:"");

                if(req.body.Col_Code){
                    request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
                }


                request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code?req.body.Clarity_Code:"");
                request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code?req.body.Cut_Code:"");
                request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code?req.body.Symmetry_Code:"");
                request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code?req.body.Fluorescence_Code:"");
                request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code?req.body.Lab_Code:"");
                request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code?req.body.Polish_Code:"");
                request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code?req.body.EyeClean_Code:"");
                request.input('LocationCode', sql.VarChar(30), req.body.LocationCode?req.body.LocationCode:"");
                request.input('Origin', sql.VarChar(30), req.body.Origin?req.body.Origin:"");
                request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code?req.body.Lust_Code:"");
                request.input('HA_Code', sql.VarChar(400), req.body.HA_Code?req.body.HA_Code:"");

                if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
                if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
                if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
                if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
                if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
                if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
                if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
                if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
                if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
                if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
                if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
                if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
                if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
                if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
                if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
                if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
                if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
                if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
                if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
                if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
                if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
                if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
                if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
                if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
                if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
                if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
                if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
                if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

                if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
                if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
                if(req.body.FromI_date){ request.input('FromI_date', sql.VarChar(30), req.body.FromI_date); }
                if(req.body.ToI_Date){ request.input('ToI_Date', sql.VarChar(30), req.body.ToI_Date); }


                if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
                if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
                if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
                if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
                if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
                if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }
            }

        }else{
            spname = 'WB_BasketStoneDisplay';
        }





        request = await request.execute(spname)

        //console.log(request.recordset);


        if(request.recordset){

            let recordsets = request;

            if(recordsets && recordsets.recordset){

                const Excel = require('exceljs');
                const fs = require('fs');
                const path = require('path');
                const workbook = new Excel.Workbook();
                const worksheet = workbook.addWorksheet("Narola Gems");

                worksheet.columns = [
                    {header: 'srno', key: 'srno', width: 7},
                    {header: 'PId', key: 'PId', width: 10},
                    {header: 'S_Name', key: 'S_Name', width: 12},
                    {header: 'GC_Name', key: 'GC_Name', width: 20},
                    {header: 'GQ_Name', key: 'GQ_Name', width: 10},
                    {header: 'Carat', key: 'Carat', width: 10},
                    {header: 'GRap', key: 'GRap', width: 10},
                    {header: 'Disc', key: 'Disc', width: 10},
                    {header: 'GRate', key: 'GRate', width: 10},
                    {header: 'Total', key: 'Total', width: 10},
                    {header: 'GCT_Name', key: 'GCT_Name', width: 9},
                    {header: 'GPO_Name', key: 'GPO_Name', width: 9},
                    {header: 'GSY_Name', key: 'GSY_Name', width: 9},
                    {header: 'GFL_Name', key: 'GFL_Name', width: 10},
                    {header: 'CR_Name', key: 'CR_Name', width: 10},
                    {header: 'CertNo', key: 'CertNo', width: 10},
                    {header: 'Meas', key: 'Meas', width: 10},
                    {header: 'TotDepth', key: 'TotDepth', width: 10},
                    {header: 'Table1', key: 'Table1', width: 10},
                    {header: 'BSHD_Name', key: 'BSHD_Name', width: 10},
                    {header: 'NGS', key: 'NGS', width: 10},
                    {header: 'EC_Name', key: 'EC_Name', width: 10},
                ];

                [1,2,3,4].forEach(function(record) {
                    worksheet.addRow({
                        srno: 'SrNo',
                        PId: 'StoneId',
                        S_Name: 'Shape',
                        GC_Name: 'Color',
                        GQ_Name: 'Clarity',
                        Carat: 'Carat',
                        GRap: 'Rap',
                        Disc: 'Disc%',
                        GRate: 'PerCarat',
                        Total: 'Amount',
                        GCT_Name: 'Cut',
                        GPO_Name: 'Pol',
                        GSY_Name: 'Sym',
                        GFL_Name: 'Flo',
                        CR_Name: 'Lab',
                        CertNo: 'ReportNo',
                        Meas: 'Measurement',
                        TotDepth: 'Depth%',
                        Table1: 'Table%',
                        BSHD_Name: 'Shade',
                        NGS: 'NGS Comment',
                        EC_Name: 'EyeClean',
                    });
                });

                recordsets.recordset.forEach(function(record,index) {
                    worksheet.addRow({
                        srno: index+1,
                        PId: record['PId'],
                        S_Name: record['S_Name'],
                        GC_Name: record['GC_Name'],
                        GQ_Name: record['GQ_Name'],
                        Carat: record['Carat'],
                        GRap: record['GRap'],
                        Disc: record['Disc'],
                        GRate: record['GRate'],
                        Total: record['Total'],
                        GCT_Name: record['GCT_Name'],
                        GPO_Name: record['GPO_Name'],
                        GSY_Name: record['GSY_Name'],
                        GFL_Name: record['GFL_Name'],
                        CR_Name: record['CR_Name'],
                        CertNo: record['CertNo'],
                        Meas: record['Meas'],
                        TotDepth: record['TotDepth'],
                        Table1: record['Table1'],
                        BSHD_Name: record['BSHD_Name'],
                        NGS: record['NGS'],
                        EC_Name: record['EC_Name'],
                    });
                });

                let totalCts = avgRap = avgDisc = ctRate = totAmount = fCtRate = fTotAmount = 0;
                totalCts = recordsets.recordset.reduce((acc, val) => {
                    return acc + parseFloat(val.Carat);
                },0);

                avgRap = recordsets.recordset.reduce((acc, val) => {
                    return acc + (parseFloat(val.Carat)*parseFloat(val.GRap));
                },0);
                avgRap/=totalCts;
                avgRap = avgRap.toFixed(2);

                totAmount = recordsets.recordset.reduce((acc, val) => {
                    return acc + parseFloat(val.Total);
                },0);
                totAmount = totAmount.toFixed(2);

                ctRate = recordsets.recordset.reduce((acc, val) => {
                    return acc + (parseFloat(val.Carat)*parseFloat(val.GRate));
                },0);
                ctRate/=totalCts;
                ctRate = ctRate.toFixed(2);

                avgDisc = 100-(ctRate/avgRap*100);
                avgDisc = avgDisc.toFixed(2);



                worksheet.getCell('F3').value = totalCts;
                worksheet.getCell('F3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('F4').value = totalCts;
                worksheet.getCell('F4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('G3').value = avgRap;
                worksheet.getCell('G3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('G4').value = avgRap;
                worksheet.getCell('G4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('H3').value = avgDisc;
                worksheet.getCell('H3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('H4').value = avgDisc;
                worksheet.getCell('H4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('I3').value = ctRate;
                worksheet.getCell('I3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('I4').value = ctRate;
                worksheet.getCell('I4').font = {color: { argb: '008000' }, bold: true};

                worksheet.getCell('J3').value = totAmount;
                worksheet.getCell('J3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('J4').value = totAmount;
                worksheet.getCell('J4').font = {color: { argb: '008000' }, bold: true};
                // CALCULATION ENDS


                //worksheet.duplicateRow(1,4,true);
                worksheet.mergeCells('A1:B4');
                worksheet.mergeCells('C1:C2');
                worksheet.getCell('A1').value = '';
                worksheet.getCell('A1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FFFFFF'}};

                worksheet.getCell('C1').value = new Date();
                worksheet.getCell('C1').font = {bold: true};

                worksheet.getCell('C2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'EDDA74'}};

                worksheet.getCell('C3').value = 'Total';
                worksheet.getCell('C3').font = {color: { argb: '800080' }, bold: true};

                worksheet.getCell('C4').value = 'Filtered';
                worksheet.getCell('C4').font = {color: { argb: '008000' }, bold: true};

                worksheet.mergeCells('D1:G1');
                worksheet.getCell('D1').value = 'Total';
                worksheet.getCell('D1').font = { bold: true};
                worksheet.getCell('D1').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('D1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.mergeCells('H1:J1');
                worksheet.getCell('H1').value = 'Rate';
                worksheet.getCell('H1').font = { bold: true};
                worksheet.getCell('H1').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('H1').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.mergeCells('D2:E2');
                worksheet.getCell('D2').value = 'Pcs';
                worksheet.getCell('D2').font = {bold: true};
                worksheet.getCell('D2').alignment = { vertical: 'middle', horizontal: 'center' };
                worksheet.getCell('D2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('F2').value = 'Carats';
                worksheet.getCell('F2').font = {bold: true};
                worksheet.getCell('F2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('G2').value = 'Avg Rap';
                worksheet.getCell('G2').font = {bold: true};
                worksheet.getCell('G2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'00FFFF'}};

                worksheet.getCell('H2').value = 'Avg Dis';
                worksheet.getCell('H2').font = {bold: true};
                worksheet.getCell('H2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.getCell('I2').value = 'Per Carat Rate';
                worksheet.getCell('I2').font = {bold: true};
                worksheet.getCell('I2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.getCell('J2').value = 'Total Amount';
                worksheet.getCell('J2').font = {bold: true};
                worksheet.getCell('J2').fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'FAAFBE'}};

                worksheet.mergeCells('D3:E3');
                worksheet.getCell('D3').value = '';

                worksheet.mergeCells('D4:E4');
                worksheet.getCell('D4').value = '';

                worksheet.mergeCells('K1:Q4');
                worksheet.getCell('K1').value = '';

                worksheet.mergeCells('R1:Y4');
                worksheet.getCell('R1').value = '';

                var imageId2 = workbook.addImage({
                    buffer: fs.readFileSync(path.join(__dirname, '../../dist/images/EmailLogo.png')),
                    extension: 'png',
                });

                // worksheet.addImage(imageId2, {
                //     tl: { col: 13.4, row: 0.6 },
                //     ext: { width: 60, height: 60 }
                // });

                worksheet.addImage(imageId2, {
                    tl: { col: 0, row: 1 },
                    ext: { width: 120, height: 40 }
                });

                //worksheet.addImage(imageId2, 'K1:Q4');

                worksheet.getRow(5).fill = {type: 'pattern',pattern:'solid',fgColor:{argb:'ADD8E6'}};
                worksheet.getRow(5).font = {bold: true};


                for(let i=1;i<23;i++){
                    worksheet.getColumn(i).alignment = { vertical: 'middle', horizontal: 'center' };
                }
                worksheet.autoFilter = { from: 'A5',to: 'V5'}

                for(let i=1;i<(recordsets.recordset.length+6);i++){
                    worksheet.getRow(i).border = { top: {style:'thin'}, left: {style:'thin'}, bottom: {style:'thin'}, right: {style:'thin'}};
                    if(recordsets.recordset[i-1] && recordsets.recordset[i-1].PId){
                        worksheet.getCell('B'+(i+5)).value = {
                            text: recordsets.recordset[i-1].PId,
                            hyperlink: 'https://ngnode.azurewebsites.net/stonedetail/'+recordsets.recordset[i-1].PId,
                            tooltip: 'ngnode.azurewebsites.net'
                        }
                        //'http://www.narolagems.com?id='+recordsets.recordset[i-1].PId,
                        worksheet.getCell('I'+(i+5)).font = {color: { argb: 'FF0000' }}
                        worksheet.getCell('K'+(i+5)).font = {color: { argb: '008000' }}
                        worksheet.getCell('L'+(i+5)).font = {color: { argb: '008000' }}
                        worksheet.getCell('M'+(i+5)).font = {color: { argb: '008000' }}
                    }
                }

                worksheet.getCell('D3').value = recordsets.recordset.length;
                worksheet.getCell('D3').font = {color: { argb: '800080' }, bold: true};
                worksheet.getCell('D4').value = recordsets.recordset.length;
                worksheet.getCell('D4').font = {color: { argb: '008000' }, bold: true};

                workbook.xlsx.writeBuffer().then(function(buffer) {




                    if(req.body.email){
                        let NM = require('../helpers/nodemailer');
                        var path = require('path');

                        var mailOptions = {
                            from: process.env.GMAIL_USER,
                            to: req.body.email,
                            subject: 'report xlsx',
                            text: 'please find the attachment',
                            attachments: [
                                {
                                    filename: 'attach.xlsx',
                                    content: buffer
                                }
                            ]
                        };
                        NM.sendSingle(mailOptions);
                        res.json({success: true, data: null, message:"mail sent"})
                    }else{
                        res.json({success: false, data: null})
                    }


                });

            }else{
                res.json({success: false, data: null})
            }

        }else{
            res.json({success: true, data: null})
        }


        //res.json(result.recordset)
    } catch (err) {
        console.log(err);
        res.json({success: false, data: null})
    }

});


route.post('/mailStoneDetail', async (req, res) => {
    res.json({success:true,data:null});
    // res.json(req.body);
    // console.log(req.body);
    // return;

    let NM = require('../helpers/nodemailer');
    var path = require('path');

    var mailOptions = {
        from: process.env.GMAIL_USER,
        to: req.body.email,
        subject: 'Stone Details',
        text: 'here is your stone details in attachment',
        attachments: [
            // {   // utf-8 string as an attachment
            //     filename: 'text1.txt',
            //     content: 'hello world!'
            // },
            // {   // binary buffer as an attachment
            //     filename: 'vikeshxl.xlsx',
            //     content: buffer
            // },
            // {   // file on disk as an attachment
            //     filename: 'vikesh.pdf',
            //     path: path.join(__dirname, '../../dist/pdfs/sallu.pdf')
            // }
            // {   // filename and content type is derived from path
            //     path: '/path/to/file.txt'
            // },
            // {   // stream as an attachment
            //     filename: 'text4.txt',
            //     content: fs.createReadStream('file.txt')
            // },
            // {   // define custom content type for the attachment
            //     filename: 'text.bin',
            //     content: 'hello world!',
            //     contentType: 'text/plain'
            // },
            {   // use URL as an attachment
                filename: 'attachment.'+req.body.ext,
                path: req.body.url
            },
            // {   // encoded string as an attachment
            //     filename: 'text1.txt',
            //     content: 'aGVsbG8gd29ybGQh',
            //     encoding: 'base64'
            // },
            // {   // data uri as an attachment
            //     path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
            // },
            // {
            //     // use pregenerated MIME node
            //     raw: 'Content-Type: text/plain\r\n' +
            //     'Content-Disposition: attachment;\r\n' +
            //     '\r\n' +
            //     'Hello world!'
            // }
        ]
    };
    NM.sendAttachment(mailOptions,'url')
    //res.send('lets see1111');

});

route.post('/downloadDetailDoc', async (req, res) => {
    let https = require('https')
    // https.get('https://pcknstg.blob.core.windows.net/hdfile/DimCrt/6331778391.Pdf', function(response) {
    https.get(req.body.url, function(response) {

        data = [];
        response.on('data', function(chunk) {
            data.push(chunk);
        });

        response.on('end', function() {
            data = Buffer.concat(data); // do something with data
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(data),
                'Content-Type': 'application/octet-stream',
                'Content-disposition': 'attachment;filename=stoneDetail.'+req.body.ext}).end(data);


        });
    });

    var data = [];




});



route.post('/getStoneDetail', async (req, res) => {

    if(req.body.pid){

        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('PID', sql.VarChar(30), req.body.pid);


            request = await request.execute('WB_StoneDetailView')


            if(request.recordset){
                res.json({success: true, data: request.recordset[0]})
            }else{
                res.json({success: true, data: null})
            }


            //res.json(result.recordset)
        } catch (err) {
            console.log(err);
            res.json({success: false, data: null})
        }

    }else{
        res.json({success: false, data: []})
    }
});


route.post('/confirmStone', async (req, res) => {
    if(req.body.UserId && req.body.PId && req.body.Con_Date && req.body.Con_Time && req.body.CompName && req.body.OffPer && req.body.CompanyLocation && req.body.IP && req.body.IP.ip){



        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(200), req.body.UserId);
            request.input('PId', sql.VarChar(20), req.body.PId);
            request.input('Con_Date', sql.DateTime2, new Date());
            request.input('Con_Time', sql.DateTime2, new Date());
            request.input('IP', sql.VarChar(100), req.body.IP.ip);
            request.input('CompName', sql.VarChar(100), req.body.CompName);
            request.input('OffPer', sql.Decimal(10, 2), parseFloat(req.body.OffPer));
            request.input('CompanyLocation', sql.VarChar(50), req.body.CompanyLocation);
            request.input('Confirm_type', sql.VarChar(2), '');
            request.input('IsPrimium', sql.Bit, 0);
            request.input('ConId', sql.Int, 0);

            request = await request.execute('WB_ConfirmOrderSave')


            if(request.recordset){
                res.json({success: true, data: []})
            }else{
                res.json({success: true, data: []})
            }

        } catch (err) {
            console.log(err);
            res.json({success: false, data: null})
        }


    }else{
        res.json({success: false, data: []})
    }
});

route.post('/addToBasket', async (req, res) => {


    /*
     const http = require('http');

     http.get('http://api.ipify.org/?format=json', (resp) => {
     let data = '';
     resp.on('data', (chunk) => { data += chunk; });

     resp.on('end', () => {
     data = JSON.parse(data);
     console.log('ip is ',data.ip);
     });

     }).on("error", (err) => {
     console.log("Error: " + err.message);
     });
     */

    if(req.body.PId && req.body.ip && req.body.ip.ip){


        try {
            const pool = await poolPromise;

            let request = await pool.request()

            let obj = {
                UserId:'nik',
                PId:req.body.PId,
                Ord_Date:req.body.date,
                Ord_Time:req.body.time,
                IP:req.body.ip.ip,
                CompName:req.body.CompName
            }


            request.input('UserId', sql.VarChar(200), obj.UserId);
            request.input('PId', sql.VarChar(20), obj.PId);
            request.input('Ord_Date', sql.DateTime2, new Date());
            request.input('Ord_Time', sql.DateTime2, new Date());
            request.input('IP', sql.VarChar(100), obj.IP);
            request.input('CompName', sql.VarChar(100), obj.CompName);


            request = await request.execute('WB_OrderDetSave')


            if(request.recordset){
                res.json({success: true, data: []})
            }else{
                res.json({success: true, data: []})
            }


            //res.json(result.recordset)
        } catch (err) {
            console.log(err);
            res.json({success: false, data: null})
        }

    }else{
        res.json({success: false, data: []})
    }
});
route.post('/addToWishlist', async (req, res) => {


    /*
     const http = require('http');

     http.get('http://api.ipify.org/?format=json', (resp) => {
     let data = '';
     resp.on('data', (chunk) => { data += chunk; });

     resp.on('end', () => {
     data = JSON.parse(data);
     console.log('ip is ',data.ip);
     });

     }).on("error", (err) => {
     console.log("Error: " + err.message);
     });
     */

    if(req.body.PId && req.body.ip && req.body.ip.ip){


        try {
            const pool = await poolPromise;

            let request = await pool.request()

            let obj = {
                UserId:req.body.UserId,
                PId:req.body.PId,
                Ord_Date:req.body.date,
                Ord_Time:req.body.time,
                IP:req.body.ip.ip,
                CompName:req.body.CompName
            }


            request.input('UserId', sql.VarChar(200), obj.UserId);
            request.input('PId', sql.VarChar(20), obj.PId);
            request.input('Date', sql.DateTime2, new Date());
            request.input('IP', sql.VarChar(100), obj.IP);
            request.input('CompName', sql.VarChar(100), obj.CompName);


            request = await request.execute('WB_WishlistMastSave')


            if(request.recordset){
                res.json({success: true, data: []})
            }else{
                res.json({success: true, data: []})
            }


            //res.json(result.recordset)
        } catch (err) {
            console.log(err);
            res.json({success: false, data: null})
        }

    }else{
        res.json({success: false, data: []})
    }
});

route.post('/RemoveFromBasket', async (req, res) => {



    if(req.body.PId && req.body.UserId){

        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('PId', sql.VarChar(20), req.body.PId);
            request.input('UserId', sql.VarChar(200), req.body.UserId);


            request = await request.execute('WB_OrderDetDelete')


            if(request.recordset){
                res.json({success: true, data: []})
            }else{
                res.json({success: true, data: []})
            }


            //res.json(result.recordset)
        } catch (err) {
            console.log(err);
            res.json({success: false, data: null})
        }


    }else{
        res.json({success: false, data: []})
    }
});

route.post('/myBasket', async (req, res) => {


    if(req.body.UserId){


        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(200), req.body.UserId);


            request = await request.execute('WB_BasketStoneDisplay')


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


    }else{
        res.json({success: false, data: []})
    }


});

route.post('/myOrder', async (req, res) => {

    if(req.body.UserId){




        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(100), req.body.UserId);
            if(req.body.ToDate){ request.input('ToDate', sql.DateTime2, new Date(req.body.ToDate)) };
            if(req.body.FromDate){ request.input('FromDate', sql.DateTime2, new Date(req.body.FromDate)) };
            if(req.body.StoneIDList){ request.input('StoneIDList', sql.VarChar(200), req.body.StoneIDList) };
            if(req.body.CertList){ request.input('CertList', sql.VarChar(200), req.body.CertList) };
            if(req.body.StatusType){ request.input('StatusType', sql.VarChar(200), req.body.StatusType) };


            request = await request.execute('WB_ConfirmOrderDisplay')


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


    }else{
        res.json({success: false, data: []})
    }


});

route.post('/getMyWishlist', async (req, res) => {


    if(req.body.UserId){




        try {
            const pool = await poolPromise;

            let request = await pool.request()

            request.input('UserId', sql.VarChar(50), req.body.UserId);
            if(req.body.EndDate){ request.input('EndDate', sql.DateTime2, new Date(req.body.EndDate)) };
            if(req.body.StartDate){ request.input('StartDate', sql.DateTime2, new Date(req.body.StartDate)) };
            if(req.body.CompanyName){ request.input('CompanyName', sql.VarChar(50), req.body.CompanyName) };
            if(req.body.stoneid){ request.input('stoneid', sql.VarChar(8000), req.body.stoneid) };





            request = await request.execute('WB_WishlistDisplay')


            //console.log(request.recordset);
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


    }else{
        res.json({success: false, data: []})
    }


});

route.post('/newArrival', async (req, res) => {


    try {
        const pool = await poolPromise;

        let request = await pool.request()

        request.input('UserId', sql.VarChar(100), req.body.UserId);
        request.input('IsNewArrival', sql.Bit, true);


        request = await request.execute('WB_DiamondResultFill')


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



route.get('/downloadXLS-bkp', async (req, res) => {

    const Excel = require('exceljs');
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("My Sheet");

    worksheet.columns = [
        {header: 'Id', key: 'id', width: 10},
        {header: 'Name', key: 'name', width: 32},
        {header: 'D.O.B.', key: 'dob', width: 15,}
    ];

    worksheet.addRow({id: 1, name: 'John Doe', dob: new Date(1970, 1, 1)});
    worksheet.addRow({id: 2, name: 'Jane Doe', dob: new Date(1965, 1, 7)});



    await workbook.xlsx.writeBuffer()
        .then(function(buffer) {
            // done



            let xlsData = Buffer.concat([buffer]);
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(xlsData),
                'Content-Type': 'application/vnd.ms-excel',
                'Content-disposition': 'attachment;filename=allList.xlsx',}).end(xlsData);



        });
    //await workbook.xlsx.writeFile('wwwwwwwwww.xlsx');
    //res.send('selddd')

//  load a copy of export.xlsx
//         const newWorkbook = new Excel.Workbook();
//         await newWorkbook.xlsx.readFile('export.xlsx');
//
//         const newworksheet = newWorkbook.getWorksheet('My Sheet');
//         newworksheet.columns = [
//             {header: 'Id', key: 'id', width: 10},
//             {header: 'Name', key: 'name', width: 32},
//             {header: 'D.O.B.', key: 'dob', width: 15,}
//         ];
//         await newworksheet.addRow({id: 3, name: 'New Guy', dob: new Date(2000, 1, 1)});
//
//         await newWorkbook.xlsx.writeFile('export2.xlsx');
//
//         console.log("File is written");

    //};

    //exTest();


});

route.get('/pdf1', (req, res) => {
    var path = require('path');
    var fonts = {
        Roboto: {
            normal: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Regular.ttf'),
            bold: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Medium.ttf'),
            italics: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-Italic.ttf'),
            bolditalics: path.join(__dirname, '../../server/libs/pdfkit/fonts/Roboto-MediumItalic.ttf')
        }
    };

    var PdfPrinter = require('../libs/pdfkit/src/printer');
    var printer = new PdfPrinter(fonts);
    var fs = require('fs');

    var tblbody = [

        //table header
        [
            { text: "Particulars", style: ['tblhead'],border: [false, false, false, false]},
            { text: "	Schedule Date", style: ['tblhead'],border: [false, false, false, false]},
            { text: "Amount", style: ['tblhead'],border: [false, false, false, false]},
        ],


        //tbody
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "kkkkkkk",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:12,style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],
        [
            { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
            { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
            { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
        ],


        //table footer
        // [
        //   { text: "", style: ['tbldata'], border: [false, false, false, false]},
        //   { text: "", style: ['tbldata'], border: [false, false, false, false]},
        //   { text:"Paid Amount : ₹ 18585", style: ['tbldata'], border: [false, true, false, false]}
        // ],

    ];
    var docDefinitioncreated = {
        content: [
            {

                alignment:"justify",
                table: {
                    //widths: [161,161,161],
                    //heights: [23,23,23],
                    body: tblbody,
                },
                // layout: 'lightHorizontalLines',

            }
        ],
        styles: {
            header: { fontSize: 18 },
            bigger: { fontSize: 15, italics: true },
            tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, margin: [5, 5], alignment:"center" },
            tbldata: { margin: [0, 3], alignment:"center" }
        },
        defaultStyle: { columnGap: 10 }
    };

    var pdfDoc = printer.createPdfKitDocument(docDefinitioncreated);
    // pdfDoc.pipe(fs.createWriteStream(path.join(__dirname, '../../dist/pdfs/sallu.pdf')));
    // pdfDoc.end();

    let buffers = [];
    pdfDoc.on('data', buffers.push.bind(buffers));
    pdfDoc.on('end', () => {

        let pdfData = Buffer.concat(buffers);
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(pdfData),
            'Content-Type': 'application/pdf',
            'Content-disposition': 'attachment;filename=cham.pdf',}).end(pdfData);

    });
    pdfDoc.end();

});

route.get('/pdf', (req, res) => {


    const PDFDocument =  require('pdfkit');

    var myDoc = new PDFDocument({
        layout : 'landscape'
    });




    let buffers = [];
    myDoc.on('data', buffers.push.bind(buffers));
    myDoc.on('end', () => {

        let pdfData = Buffer.concat(buffers);
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(pdfData),
            'Content-Type': 'application/pdf',
            'Content-disposition': 'attachment;filename=hash.pdf',}).end(pdfData);

    });

    myDoc.font('Times-Roman').fontSize(12).text("sdsdd sd sd sd sd sd ").end();



});



route.post('/simpleRequestWithoutPoolExample', async (req, res) => {

    //sql.close();
    sql.connect(config, function(conn) {
        var request = new sql.Request(conn);
        request.input('UserId', sql.VarChar(30), 'nik-Peacock');
        request.input('StatusType', sql.VarChar(30), 'S_India');
        request.execute('WB_ConOrdDisp_Kendo_New').then(function(recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordsets && recordsets.recordsets[0]){
                res.json({success:true,data:recordsets.recordsets[0]})
            }else{
                res.json({success:true,data:[]})
            }
            sql.close();
        }).catch(function(err) {
            console.log(err);
            sql.close();
        });
    });

});

route.get('/mail', (req, res) => {
    let NM = require('../helpers/nodemailer');
    var path = require('path');

    var mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'vickeyvaghela82@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy! peasy 3-4-2020',
        attachments: [
            // {   // utf-8 string as an attachment
            //     filename: 'text1.txt',
            //     content: 'hello world!'
            // },
            // {   // binary buffer as an attachment
            //     filename: 'text2.txt',
            //     content: new Buffer('hello world!','utf-8')
            // },
            {   // file on disk as an attachment
                filename: 'vikesh.pdf',
                path: path.join(__dirname, '../../dist/pdfs/sallu.pdf')
            }
            // {   // filename and content type is derived from path
            //     path: '/path/to/file.txt'
            // },
            // {   // stream as an attachment
            //     filename: 'text4.txt',
            //     content: fs.createReadStream('file.txt')
            // },
            // {   // define custom content type for the attachment
            //     filename: 'text.bin',
            //     content: 'hello world!',
            //     contentType: 'text/plain'
            // },
            // {   // use URL as an attachment
            //     filename: 'license.txt',
            //     path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
            // },
            // {   // encoded string as an attachment
            //     filename: 'text1.txt',
            //     content: 'aGVsbG8gd29ybGQh',
            //     encoding: 'base64'
            // },
            // {   // data uri as an attachment
            //     path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
            // },
            // {
            //     // use pregenerated MIME node
            //     raw: 'Content-Type: text/plain\r\n' +
            //     'Content-Disposition: attachment;\r\n' +
            //     '\r\n' +
            //     'Hello world!'
            // }
        ]
    };
    NM.sendAttachment(mailOptions,'url')
    res.send('lets see1111');

});

route.get('/downloadDetailDoc', (req, res) => {
    let https = require('https')
    // https.get('https://pcknstg.blob.core.windows.net/hdfile/DimCrt/6331778391.Pdf', function(response) {
    https.get('https://pcknstg.blob.core.windows.net/hdfile/DimImg/5291-9.JPG', function(response) {

        data = [];
        response.on('data', function(chunk) {
            data.push(chunk);
        });

        response.on('end', function() {
            data = Buffer.concat(data); // do something with data
            res.writeHead(200, {
                'Content-Length': Buffer.byteLength(data),
                'Content-Type': 'application/octet-stream',
                'Content-disposition': 'attachment;filename=stoneDetail.JPG',}).end(data);


        });
    });

    var data = [];




});






route.get('/getResultCounttest', (req, res) => {
    //console.log(JSON.stringify(req.body));

    const conn = new sql.ConnectionPool(config)
    conn.connect().then(function () {
        var request = new sql.Request(conn);
        //console.log('req.body start ');
        //console.log(JSON.stringify(req.body));
        //console.log('req.body end ');



        request.input('UserId', sql.VarChar(30), req.body.UserId);
        request.input('S_Code', sql.VarChar(30), req.body.S_Code);

        if(req.body.Col_Code){
            request.input('Col_Code', sql.VarChar(30), req.body.Col_Code);
        }


        request.input('Clarity_Code', sql.VarChar(30), req.body.Clarity_Code);
        request.input('Cut_Code', sql.VarChar(30), req.body.Cut_Code);
        request.input('Symmetry_Code', sql.VarChar(30), req.body.Symmetry_Code);
        request.input('Fluorescence_Code', sql.VarChar(30), req.body.Fluorescence_Code);
        request.input('Lab_Code', sql.VarChar(30), req.body.Lab_Code);
        request.input('Polish_Code', sql.VarChar(30), req.body.Polish_Code);
        request.input('EyeClean_Code', sql.VarChar(30), req.body.EyeClean_Code);
        request.input('LocationCode', sql.VarChar(30), req.body.LocationCode);
        request.input('Origin', sql.VarChar(30), req.body.Origin);
        request.input('Lust_Code', sql.VarChar(30), req.body.Lust_Code);
        request.input('HA_Code', sql.VarChar(400), req.body.HA_Code);

        if(req.body.FCarat){ request.input('FCarat', sql.Int, parseInt(req.body.FCarat)); }
        if(req.body.TCarat){ request.input('TCarat', sql.Int, parseInt(req.body.TCarat)); }
        if(req.body.FLowerHalf){ request.input('FLowerHalf', sql.Int, parseInt(req.body.FLowerHalf)); }
        if(req.body.TLowerHalf){ request.input('TLowerHalf', sql.Int, parseInt(req.body.TLowerHalf)); }
        if(req.body.FDepth){ request.input('FDepth', sql.Int, parseInt(req.body.FDepth)); }
        if(req.body.TDepth){ request.input('TDepth', sql.Int, parseInt(req.body.TDepth)); }
        if(req.body.FStarLength){ request.input('FStarLength', sql.Int, parseInt(req.body.FStarLength)); }
        if(req.body.TStarLength){ request.input('TStarLength', sql.Int, parseInt(req.body.TStarLength)); }
        if(req.body.FCAngle){ request.input('FCAngle', sql.Int, parseInt(req.body.FCAngle)); }
        if(req.body.TCAngle){ request.input('TCAngle', sql.Int, parseInt(req.body.TCAngle)); }
        if(req.body.FPAngle){ request.input('FPAngle', sql.Int, parseInt(req.body.FPAngle)); }
        if(req.body.TPAngle){ request.input('TPAngle', sql.Int, parseInt(req.body.TPAngle)); }
        if(req.body.FDiscount){ request.input('FDiscount', sql.Int, parseInt(req.body.FDiscount)); }
        if(req.body.TDiscount){ request.input('TDiscount', sql.Int, parseInt(req.body.TDiscount)); }
        if(req.body.FTable){ request.input('FTable', sql.Int, parseInt(req.body.FTable)); }
        if(req.body.TTable){ request.input('TTable', sql.Int, parseInt(req.body.TTable)); }
        if(req.body.FRatio){ request.input('FRatio', sql.Int, parseInt(req.body.FRatio)); }
        if(req.body.TRatio){ request.input('TRatio', sql.Int, parseInt(req.body.TRatio)); }
        if(req.body.FDiameter){ request.input('FDiameter', sql.Int, parseInt(req.body.FDiameter)); }
        if(req.body.TDiameter){ request.input('TDiameter', sql.Int, parseInt(req.body.TDiameter)); }
        if(req.body.FGirdle){ request.input('FGirdle', sql.Int, parseInt(req.body.FGirdle)); }
        if(req.body.TGirdle){ request.input('TGirdle', sql.Int, parseInt(req.body.TGirdle)); }
        if(req.body.FPHeight){ request.input('FPHeight', sql.Int, parseInt(req.body.FPHeight)); }
        if(req.body.TPHieght){ request.input('TPHieght', sql.Int, parseInt(req.body.TPHieght)); }
        if(req.body.FCHeight){ request.input('FCHeight', sql.Int, parseInt(req.body.FCHeight)); }
        if(req.body.TCHieght){ request.input('TCHieght', sql.Int, parseInt(req.body.TCHieght)); }
        // if(req.body.FPRICE){ request.input('FPRICE', sql.Int, parseInt(req.body.FPRICE)); }
        // if(req.body.TPRICE){ request.input('TPRICE', sql.Int, parseInt(req.body.TPRICE)); }

        if(req.body.Fromdate){ request.input('Fromdate', sql.VarChar(30), req.body.Fromdate); }
        if(req.body.ToDate){ request.input('ToDate', sql.VarChar(30), req.body.ToDate); }
        if(req.body.FromI_date){ request.input('FromI_date', sql.VarChar(30), req.body.FromI_date); }
        if(req.body.ToI_Date){ request.input('ToI_Date', sql.VarChar(30), req.body.ToI_Date); }


        if(req.body.FMeasHeight){ request.input('FMeasHeight', sql.Int, parseInt(req.body.FMeasHeight)); }
        if(req.body.TMeasHeight){ request.input('TMeasHeight', sql.Int, parseInt(req.body.TMeasHeight)); }
        if(req.body.FMeasLength){ request.input('FMeasLength', sql.Int, parseInt(req.body.FMeasLength)); }
        if(req.body.TMeasLength){ request.input('TMeasLength', sql.Int, parseInt(req.body.TMeasLength)); }
        if(req.body.FMeasWidth){ request.input('FMeasWidth', sql.Int, parseInt(req.body.FMeasWidth)); }
        if(req.body.TMeasWidth){ request.input('TMeasWidth', sql.Int, parseInt(req.body.TMeasWidth)); }


        if(req.body.whiteColor){
            request.input('IsFancy', sql.Int, 0);
        }else{
            request.input('IsFancy', sql.Int, 1);
        }



        // request.execute('WB_DiamondResult_Count').then(function (recordsets, returnValue, affected) {
        request.execute('WB_DiamondResultCount').then(function (recordsets, returnValue, affected) {

            if(recordsets && recordsets.recordset && recordsets.recordset[0]){
                //console.log('this his search res');
                //console.log();
                //console.log(JSON.stringify(recordsets.recordset));
                //console.log();
                res.json({success: true, data: recordsets.recordset})
            }else{
                res.json({success: true, data: null})
            }
            conn.close();
        }).catch(function (err) {
            console.log(err);
            conn.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
});





module.exports = route;

