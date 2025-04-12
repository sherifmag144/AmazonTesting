import _ from 'lodash';
import body from './RequestBody.json';

it('Api testing', () => {
  let CreateUserBody = body.CreateUser;
  let url = 'https://reqres.in/api/users';
  cy.POSTrequest(url, CreateUserBody).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body.name).to.eq(CreateUserBody.name);
    expect(response.body.job).to.eq(CreateUserBody.job);
    expect(response.body.age).to.eq(CreateUserBody.age);

    let iDresponse = response.body.id;
    let url2 = `https://reqres.in/api/users/${iDresponse}`;

    cy.GETrequest(url2).then((response2) => {
      expect(response2.status).to.eq(404); //Should be 200 but Failed

      let bodyUpdate = _.cloneDeep(CreateUserBody);
      bodyUpdate.name = 'ahmed';
      bodyUpdate.job = 'DEV';
      bodyUpdate.age = '27';

      cy.PUTrequest(url2, bodyUpdate).then((response3) => {
        expect(response3.status).to.eq(200);
        expect(response3.body.name).to.eq(bodyUpdate.name);
        expect(response3.body.job).to.eq(bodyUpdate.job);
        expect(response3.body.age).to.eq(bodyUpdate.age);
      });
    });
  });
});
