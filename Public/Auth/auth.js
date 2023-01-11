var namefield = document.getElementById("nameField");
var title = document.getElementById("title");
var submitBtn = document.getElementById("submit-btn");
var registerBtn = document.getElementById("register-btn");
var newName = document.getElementById("name");
var newUserName = document.getElementById("userName");
var newPass = document.getElementById("userPass");

var dbName = 'data.db';
var dbVersion = '1.0';
var dbDesc = 'User Info Database.';
var dbSize = 2 * 1024 * 1024;
var database = null;

var tableNameUserData = 'User';


// The Authentication Within this Page uses the HTML5s localStorage/LocalDatabase API 

function initApp(){
  // outputListElement = document.getElementById(outputListID);

  database = openDatabase(dbName, dbVersion, dbDesc, dbSize);

  createUserDataTable();


  // searchAll(tableNameUserData);
}

function createUserDataTable(){

  database.transaction(function(tx){

      // create the UserData table if not exist.
      var createTableSql = 'create table if not exists User(id unique, username TEXT, password TEXT, name TEXT)';
      tx.executeSql(createTableSql);
  });
  
}


function saveUserData(userNameId, userPassId, nameOfUserID){

  var userNameValue = '';
  var userPassValue = '';
  var nameOfUserValue = '';

  var userNameObject = document.getElementById(userNameId);
  if(userNameObject==null){
      alert('The user name input text box does not exist.');
      return;
  }else{
      userNameValue = userNameObject.value;
      if(userNameValue.trim().length == 0){
          alert('Please Enter a Username.');
          return;
      }
  }

  var userPassObject = document.getElementById(userPassId);
  if(userPassObject==null){
      alert('The Password Input Area Does not Exist.');
      return;
  }else{
      userPassValue = userPassObject.value;
      if(userPassValue.trim().length == 0){
          alert('Please Enter a Password.');
          return;
      }
  }

  var nameOfUserObject = document.getElementById(nameOfUserID);
  if(nameOfUserObject==null){
      alert('The Input Area Does not Exist.');
      return;
  }else{
      nameOfUserValue = nameOfUserObject.value;
      if(nameOfUserValue.trim().length == 0){
          alert('Please Enter Your Name.');
          return;
      }
  }

  isUserExist(userNameValue, userPassValue, nameOfUserValue, insertUserData);
}

function insertUserData(userNameValue, userEmailValue, nameOfUserValue){

      // execute insert sql to insert the user data to the UserData table.
      database.transaction(function(tx){

          var insertSql = 'insert into User(id, username, password, name) values(?, ?, ?, ?)';
  
          id = Math.floor(Math.random() * 10000);
  
          pubTime = Date.now();
  
          valueArray = [id, userNameValue, userEmailValue, nameOfUserValue];
  
          console.log('insertSql = ' + insertSql);
  
          tx.executeSql(insertSql, valueArray, function(tx, result){
  
              var message = 'Save user data to local SQLite database table successfully.';
              alert(message);
  
              console.log('message = ' + message);
  
              searchAll(tableNameUserData)
  
          }, function(tx, error){
  
              var message = 'Save user data to local SQLite database table fail, the error message is ' + error
              alert(message);
  
              console.log('message = ' + message);
          });
  
      });

}

// need to implement the below function later.
function isUserExist(userName, userPass, nameOfUser, insertFuncName){

  database.transaction(function(tx){

      console.log(userName);
      // select the record by username case insensetive.
      var selectSql = 'select * from ' + tableNameUserData + ' where username = \'' + userName +'\'';

      console.log('selectSql = ' + selectSql);

      tx.executeSql(selectSql, [], function(tx, result){

          console.log('result.rows.length = ' + result.rows.length);

          if(result.rows.length > 0){

              var message = 'The user name exist, please input another one.'
              alert(message);
              console.log(message);
              
          }else{
              // if not exist then insert the user data.
              insertFuncName(userName, userPass, nameOfUser);
          }

      }, function(tx, error){
          alert(error);
      });
  });
}

function searchAll(tableName){

  database.transaction(function(tx){

      // select all the data from the database table.
      var selectAllSql = 'select * from ' + tableName;
      tx.executeSql(selectAllSql, [], function(tx, results){

          var rowsNumber = results.rows.length;

          console.log('selectAllSql = ' + selectAllSql);

          console.log('rowsNumber = ' + rowsNumber);

          // first empty all the user data list on the web page. 
          // outputListElement.innerHTML = '';

          if(rowsNumber > 0){

              for(var i=0; i<rowsNumber; i++){

                  rowData = results.rows[i];

                  console.log(rowData);

              }
              
          }

      }, function(tx, error){


      });

  });
}

function loginIsUserExist(userName, userPass){

  database.transaction(function(tx){

      // select the record by username case insensetive.
      var selectSql = 'select * from ' + tableNameUserData + ' where username = \'' + userName +'\' and password = \''+ userPass +'\' ';

      console.log('selectSql = ' + selectSql);

      tx.executeSql(selectSql, [], function(tx, result){

          console.log('result.rows.length = ' + result.rows.length);

          if(result.rows.length > 0){

            var message = 'Welcome.'
            alert(message);
            window.location.assign("./Index/index.html")
            
          }else{
              // if not exist then insert the user data.
              var message = 'Invalid Credentials.'
              alert(message);
              console.log(message);
          }

      }, function(tx, error){
          alert(error);
      });
  });
}

initApp();

$(function() {

    $('#submit-btn').click(function(e) {
      e.preventDefault();

      // Transition
      namefield.style.maxHeight = "0"
      namefield.style.borderBottom = "0";
      title.innerHTML = "Login"
      submitBtn.classList.remove("disable")
      registerBtn.classList.add("disable") 
      //Transition 

      var username = document.getElementById("userName").value;
      var password = document.getElementById("userPass").value;
      var btnState = $("#submit-btn").css('background-color')


      console.log("color is:", btnState)

      if (btnState=="rgb(250, 171, 120)"){
        console.log("Logging in");
        loginIsUserExist(username, password);   
      }
    });

    $('#register-btn').click(function(e) {
      e.preventDefault();
      // Transition
      namefield.style.maxHeight = "65px"
      namefield.style.borderBottom = "2px solid #adadad";
      title.innerHTML = "Sign Up"
      submitBtn.classList.add("disable")
      registerBtn.classList.remove("disable") 
      var btnState = $("#register-btn").css('background-color')
      //Transition 
      if(btnState=="rgb(250, 171, 120)"){
        e.preventDefault();
        console.log("Into The Function")
        saveUserData("userName","userPass","name");
      }
    });
});
