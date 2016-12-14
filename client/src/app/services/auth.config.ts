interface AuthConfiguration {
    clientID: string,
    domain: string,
    responseType: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    domain: 'repuestos365.auth0.com',
    clientID: 'uIb3W48eXsaeYEZntBVac6HCCA0DCWwN',
    responseType: 'token',
    // You may need to change this!
    callbackURL: 'http://nodejs-mongodb-example-jairo-perez.44fs.preview.openshiftapps.com/home'
    //callbackURL: 'http://localhost:4200/home'
};