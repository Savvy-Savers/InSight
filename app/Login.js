import { CognitoUserPool, CognitoUserAttribute, CognitoUser, AuthenticationDetails } from 'react-native-aws-cognito-js';

export default class Login extends React.Component {
};
// userPool;
username = 'user@company.com';
password = 'Pa$$w0rd';

componentDidMount() {
  console.log('component did mount');
  //1) Create User Pool
  this.userPool = new CognitoUserPool({
    UserPoolId: 'us-east-2_M3wvPjiaU',
    ClientId: 'bevbq29dm8ic0179n9pkmevud'
  })
}

createUserInAmazonCognito() {
  console.log(create user)
  //Fill required atributes
  const attributeList = [];
  const attributeGivenName = new CognitoUserAttribute({
    Name: ‘given_name’,
    Value: ‘Smith’
  });
  attributeList.push(attributeGivenName);
  var cognitoUser;
  //Call SignUp function
  this.userPool.signUp(this.username, this.password,
    attributeList, null, (err, result) => {
      if (err) {
        console.log(‘Error at signup ‘, err);
        return;
      }
      cognitoUser = result.user;
      console.log(‘cognitoUser’, cognitoUser)
    });
}