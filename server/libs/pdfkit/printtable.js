var fonts = {
  Roboto: {
    normal: 'server/pdfkit/fonts/Roboto-Thin.ttf',
    //normal: 'server/pdfkit/fonts/Roboto-Regular.ttf',

    bold: 'server/pdfkit/fonts/Roboto-Regular.ttf',
    //bold: 'server/pdfkit/fonts/Roboto-Medium.ttf',

    italics: 'server/pdfkit/fonts/Roboto-Italic.ttf',
    bolditalics: 'server/pdfkit/fonts/Roboto-MediumItalic.ttf'
  }
};

var PdfPrinter = require('./src/printer');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

function printpdf(header, table, footer){


  var docDefinition = {
    content: [
      'By default paragraphs are stacked one on top of (or actually - below) another. ',
      'It\'s possible however to split any paragraph (or even the whole document) into columns.\n\n',
      'Here we go with 2 star-sized columns, with justified text and gap set to 20:\n\n',
      {
        alignment: 'justify',
        columns: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          }
        ]
      },
      '\nStar-sized columns have always equal widths, so if we define 3 of those, it\'ll look like this (make sure to scroll to the next page, as we have a couple of more examples):\n\n',
      {
        columns: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          }
        ]
      },
      '\nYou can also specify accurate widths for some (or all columns). Let\'s make the first column and the last one narrow and let the layout engine divide remaining space equally between other star-columns:\n\n',
      {
        columns: [
          {
            width: 90,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            width: '*',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            width: '*',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          },
          {
            width: 90,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
          }
        ]
      },
      '\nWe also support auto columns. They set their widths based on the content:\n\n',
      {
        columns: [
          {
            width: 'auto',
            text: 'auto column'
          },
          {
            width: '*',
            text: 'This is a star-sized column. It should get the remaining space divided by the number of all star-sized columns.'
          },
          {
            width: 50,
            text: 'this one has specific width set to 50'
          },
          {
            width: 'auto',
            text: 'another auto column'
          },
          {
            width: '*',
            text: 'This is a star-sized column. It should get the remaining space divided by the number of all star-sized columns.'
          },
        ]
      },
      '\nIf all auto columns fit within available width, the table does not occupy whole space:\n\n',
      {
        columns: [
          {
            width: 'auto',
            text: 'val1'
          },
          {
            width: 'auto',
            text: 'val2'
          },
          {
            width: 'auto',
            text: 'value3'
          },
          {
            width: 'auto',
            text: 'value 4'
          },
        ]
      },
      '\nAnother cool feature of pdfmake is the ability to have nested elements. Each column is actually quite similar to the whole document, so we can have inner paragraphs and further divisions, like in the following example:\n\n',
      {
        columns: [
          {
            width: 100,
            fontSize: 9,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Conveniunt quieti extremum severitatem disseretur virtute locum virtus declarant. Greges telos detrimenti persius possint eripuit appellat democrito suscipere existimant. Facere usus levitatibus confirmavit, provincia rutilius libris accommodare valetudinis ignota fugienda arbitramur falsarum commodius. Voluptas summis arbitrarer cognitio temperantiamque, fuit posidonium pro assueverit animos inferiorem, affecti honestum ferreum cum tot nemo ius partes dissensio opinor, tuum intellegunt numeris ignorant, odia diligenter licet, sublatum repellere, maior ficta severa quantum mortem. Aut evertitur impediri vivamus.'
          },
          [
            'As you can see in the document definition - this column is not defined with an object, but an array, which means it\'s treated as an array of paragraphs rendered one below another.',
            'Just like on the top-level of the document. Let\'s try to divide the remaing space into 3 star-sized columns:\n\n',
            {
              columns: [
                {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
                {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
                {text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'},
              ]
            }
          ]
        ]
      },
      '\n\nOh, don\'t forget, we can use everything from styling examples (named styles, custom overrides) here as well.\n\n',
      'For instance - our next paragraph will use the \'bigger\' style (with fontSize set to 15 and italics - true). We\'ll split it into three columns and make sure they inherit the style:\n\n',
      {
        style: 'bigger',
        columns: [
          'First column (BTW - it\'s defined as a single string value. pdfmake will turn it into appropriate structure automatically and make sure it inherits the styles',
          {
            fontSize: 20,
            text: 'In this column, we\'ve overriden fontSize to 20. It means the content should have italics=true (inherited from the style) and be a little bit bigger',
          },
          {
            style: 'header',
            text: 'Last column does not override any styling properties, but applies a new style (header) to itself. Eventually - texts here have italics=true (from bigger) and derive fontSize from the style. OK, but which one? Both styles define it. As we already know from our styling examples, multiple styles can be applied to the element and their order is important. Because \'header\' style has been set after \'bigger\' its fontSize takes precedence over the fontSize from \'bigger\'. This is how it works. You will find more examples in the unit tests.'
          }
        ]
      },
      '\n\nWow, you\'ve read the whole document! Congratulations :D'
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true
      },
      bigger: {
        fontSize: 15,
        italics: true
      }
    },
    defaultStyle: {
      columnGap: 20
    }
  };

  var pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream('server/pdfkit/pdfs/columns-new.pdf'));
  pdfDoc.end();

}

function receipt_generator(header, table, footer) {


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
    [
      { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
      { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
      { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
    ],


    //table footer
    [
      { text: "", style: ['tbldata'], border: [false, false, false, false]},
      { text: "", style: ['tbldata'], border: [false, false, false, false]},
      { text:"Paid Amount : ₹ 18585", style: ['tbldata'], border: [false, true, false, false]}
    ],

  ];

  var demotbl = Array();
  var singlerow = [
    { text: "Registration Fees 1ddd",style: ['tbldata'],border: [false, false, false, false]},
    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
  ];

  var singlerow1 = [
    { text: "Registration Fees DDDD",style: ['tbldata'],border: [false, false, false, false]},
    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
  ];

  demotbl.push(singlerow);
  demotbl.push(singlerow1);




  var docDefinitioncreated = {
    content: [
      {
        alignment: 'justify',
        columns: [
          { width: 5, text: '' },
          { width: 150, text: '121212121221 \nJoy Parsotam gamadiya' },
          { width: 190, text: '' },
          { text: 'Receipt \n REC-1334', fontSize: 17, width: 150, bold:true },
          { width: 25, text: '' },
        ]
      },
      '\n\n',
      {
        style: 'tableExample',
        margin:[275,0],
        table: {
          alignment: 'justify',
          widths: [125,125],
          heights: [23,23],
          body: [
            [{ text: "Mode of payment:",bold:true}, { text:"ONLINE BANKING"}],
            [{ text: "Payment Date:",bold:true}, { text:"08/01/2018"}],
            [{ text: "Notes:",bold:true}, { text:"2308"}],
          ],
        },
        layout: 'noBorders'
      },
      '\n\n',
      {

        table: {
          //widths: [161,161,161],
          //heights: [23,23,23],
          body: tblbody,
        },
        layout: 'lightHorizontalLines',

      },
    ],
    styles: {
      header: { fontSize: 18 },
      bigger: { fontSize: 15, italics: true },
      tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, margin: [5, 5], alignment:"center" },
      tbldata: { margin: [0, 5], alignment:"center" }
    },
    defaultStyle: { columnGap: 20 }
  };





  var pdfDoc = printer.createPdfKitDocument(docDefinitioncreated);
  // pdfDoc.pipe(fs.createWriteStream('server/pdfkit/pdfs/payment_receipt.pdf'));
  pdfDoc.pipe(fs.createWriteStream('./uploads/payment_receipt.pdf'));
  pdfDoc.end();

}

function payment_recept_mailer(data,receipt_ary) {


  var today = new Date();
  var month = parseInt(today.getMonth())+1;
  if( month < 10){
    var  month = '0'+month;
  }else{
    var month = month;
  }
  if( parseInt(today.getDate()) < 10){
    var date  = '0'+today.getDate();
  }else{
    var date = today.getDate();
  }
  var formated_date = date+'/'+month+'/'+today.getFullYear();



  console.log("gggggggggggggggg");
  console.log(data);
  console.log(receipt_ary);

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
    [
      { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
      { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
      { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
    ],


    //table footer
    [
      { text: "", style: ['tbldata'], border: [false, false, false, false]},
      { text: "", style: ['tbldata'], border: [false, false, false, false]},
      { text:"Paid Amount : ₹ 18585", style: ['tbldata'], border: [false, true, false, false]}
    ],

  ];

  var demotbl = Array();
  var singlerow = [
    { text: "Registration Fees 1ddd",style: ['tbldata'],border: [false, false, false, false]},
    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
  ];

  var singlerow1 = [
    { text: "Registration Fees DDDD",style: ['tbldata'],border: [false, false, false, false]},
    { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
    { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
  ];

  demotbl.push(singlerow);
  demotbl.push(singlerow1);




  var docDefinitioncreated = {
    content: [
      {
        alignment: 'justify',
        columns: [
          { width: 5, text: '' },
          { width: 150, text: data[0]['memberid']['membernumber']+' \n '+data[0]['memberid']['fullname'] },
          { width: 190, text: '' },
          { text: 'Receipt \n REC-'+receipt_ary[1], fontSize: 17, width: 150, bold:true },
          { width: 25, text: '' },
        ]
      },
      '\n',
      {
        style: 'tableExample',
        margin:[275,0],
        table: {
          alignment: 'justify',
          widths: [125,125],
          heights: [23,23],
          body: [
            [{ text: "Payment Date:",bold:true}, { text:formated_date}],
          ],
        },
        layout: 'noBorders'
      },
      '\n\n',
      {

        table: {
          //widths: [161,161,161],
          //heights: [23,23,23],
          body: tblbody,
        },
        layout: 'lightHorizontalLines',

      },
    ],
    styles: {
      header: { fontSize: 18 },
      bigger: { fontSize: 15, italics: true },
      tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, margin: [5, 5], alignment:"center" },
      tbldata: { margin: [0, 5], alignment:"center" }
    },
    defaultStyle: { columnGap: 20 }
  };




  var pdfDoc = printer.createPdfKitDocument(docDefinitioncreated);
  //pdfDoc.pipe(fs.createWriteStream('server/pdfkit/pdfs/payment_receipt.pdf'));
  pdfDoc.pipe(fs.createWriteStream('./uploads/payment_receipt.pdf'));
  pdfDoc.end();

}


function pdf_printer(req,res,data) {




  // var print_params =
  //   {
  //     "collection" : req.query.schemaname,
  //     "filter" : req.query.search.search,
  //     "select" : req.query.search.select,
  //     "template" : req.query.template,
  //     "data":data
  //   };
  // res.json(print_params);
  // return;

  var collection = req.body.schemaname;
  var filter = req.body.search;
  var select = req.body.select;
  var template = req.body.template;




  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10){ dd='0'+dd; }

  if(mm<10){ mm='0'+mm; }
  var today = dd+'/'+mm+'/'+yyyy;

  if(template=='receipt'){

 }else if(template=='list'){


    var tblbody = [
      //table header
      [
        { text: "Name", style: ['tblhead'],border: [false, false, false, false]},
        { text: "	Sirname Date", style: ['tblhead'],border: [false, false, false, false]},
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
        { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
        { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
        { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
      ],
      //table footer
      [
        { text: "", style: ['tbldata'], border: [false, false, false, false]},
        { text: "", style: ['tbldata'], border: [false, false, false, false]},
        { text:"Paid Amount : ₹ 18585", style: ['tbldata'], border: [false, true, false, false]}
      ],
    ];

    var tblhead_ary = Array();



    var widths = Array();
    select.forEach(function (col_heads) {
      if(col_heads.fieldname!='_id'){
        widths.push("auto");
        if(col_heads.displayname!=undefined){
          var show = col_heads.displayname;
        }else{
          var show = col_heads.fieldname;
        }
        tblhead_ary.push({ text: show, style: ['tblhead'],border: [false, false, false, false]});
      }
    });


    // res.json(tblhead_ary);
    // return;





    var final_table = Array();
    final_table.push(tblhead_ary);

    // res.json(data);
    // res.json(data.length);
    // return;

    data.forEach(function (schema_data,index) {
      var temp_data = Array();

      select.forEach(function (col_heads) {

        if(col_heads.fieldname!='_id'){

          if(col_heads.fieldname==null || col_heads.fieldname==undefined){
            var fieldval = '';
          }else{
            var select_field = col_heads.fieldname;
            var subfield_ary = col_heads.fieldname.split('.');
            if(subfield_ary[1]==undefined || subfield_ary[1]==null){
              if(data[index][subfield_ary[0]]==null || data[index][subfield_ary[0]]==undefined){
                var fieldval = '';
              }else{
                var fieldval = data[index][subfield_ary[0]];
              }
            }else{

              if(subfield_ary[0]==undefined || subfield_ary[0]==null){
                var fieldval = '';
              }else{
                if(data[index][subfield_ary[0]] == undefined || data[index][subfield_ary[0]] == null){
                  var fieldval = '';
                }else{
                  if(data[index][subfield_ary[0]][subfield_ary[1]]==undefined || data[index][subfield_ary[0]][subfield_ary[1]]==null){
                    var fieldval = '';
                  }else{
                    var fieldval = data[index][subfield_ary[0]][subfield_ary[1]];
                  }
                }
              }
            }
          }
          temp_data.push({ text: fieldval,style: ['tbldata'],border: [false, false, false, false]});
        }
      });

      final_table.push(temp_data);
    });


    // var tbldata_ary = [
    //   { text: "dedede",style: ['tbldata'],border: [false, false, false, false]},
    //   { text: "08/01/2018",style: ['tbldata'],border: [false, false, false, false]},
    //   { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
    //   { text:"₹ 18585",style: ['tbldata'],border: [false, false, false, false]},
    // ];

    // var final_tbl = [
    //   tblhead_ary,
    //   tbldata_ary,
    //   tbldata_ary,
    //
    // ];


    var filter_ary = Array();
    filter.forEach(function (filt) {
      filter_ary.push({text:filt.searchfield+" : ",bold:true});
      filter_ary.push(filt.searchvalue);
      filter_ary.push("\n");
    });


    var docDefinitioncreated = {
      content: [
        {
          alignment: 'justify',
          columns: [
            {
              text : [
                {text:"Collection:",bold:true},
                collection,
                "\n",
                {text:"Filters:",bold:true},
              ]
            }
          ]
        },
        {
          margin:[35,0],
          columns: [
            {
              text : filter_ary
            }
          ]
        },

        {
          alignment:"right",
          columns: [
            {
              text : [
                {text:"Print Date: ",bold:true},
                today,
              ]
            }
          ]
        },
        "\n",
        {

          width:100,
          alignment:"right",
          table: {
            widths: widths,
            //heights: [23,23,23],
            body: final_table,
          },
          layout: 'lightHorizontalLines',

        },


      ],
      styles: {
        header: { fontSize: 10 },
        bigger: { fontSize: 8, italics: true },
        tblhead: { fillColor: '#0071B4', color:'#fff', bold:true, margin: [5, 5], alignment:"center",fontSize: 9 },
        tbldata: { margin: [0, 5], alignment:"center",fontSize: 8 }
      },
      defaultStyle: { columnGap: 20 }
    };
 }

  var rand_filename = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 15; i++){rand_filename += possible.charAt(Math.floor(Math.random() * possible.length));}
  rand_filename = rand_filename+'.pdf';




  var pdfDoc = printer.createPdfKitDocument(docDefinitioncreated);
  var pipe = pdfDoc.pipe(fs.createWriteStream('./server/pdfkit/pdfs/'+rand_filename));

  pipe.on('finish', function () {
    var file = './server/pdfkit/pdfs/'+rand_filename;
    res.download(file,function () {
      fs.unlink(file);
    });
  });
  pdfDoc.end();

  // setTimeout(function () {
  //   var file = './server/pdfkit/pdfs/payment_receipt.pdf';
  //   res.download(file);
  // },2000)

}

function common_export(req,res){

  console.log("--------------------------");
  //res.json(req.body);
  console.log(req.body);
  console.log("--------------------------");



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
  pdfDoc.pipe(fs.createWriteStream('./uploads/kalichar.pdf'));
  pdfDoc.end();

}

export {printpdf,receipt_generator,pdf_printer,common_export,payment_recept_mailer};
