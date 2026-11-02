import { test } from '@playwright/test';

test('login', async ({ request }, testinfo) => {
    //api stands for application programing interface.
    //An api is a set of rules and mechanisms that allows two different software applications to communicate with each other.
    //to communicate with each other and exchange data.

    //1.REST API:
    //REST (Representational State Transfer) is the most commonly used api style.
    /*
    uses HTTP methods:

    METHOD   Purpose                  Example
    GET      Retrieve data             Get user by ID
    POST     create data               create new user
    PUT      completely update data    update user
    DELETE   delete data               delete user
    PATCH    partially update data     update user's email
    */
    //2.SOAP API:
    /*
    2.SOAP API
    SOAP (Simple objuct access protocal) is an XML-based protocal.

    <soap:Envelope>
    <soap:body>
        <GetUser>
            <userid>2</userid>
            </Getuser>
            </soap:Body>
            </soap:Envelope>

            
    */
    const response = await request.get('https://reqres.in/api/users?page=1');
    console.log(response);

});