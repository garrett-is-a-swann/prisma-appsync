import type {
    AMAZON_COGNITO_USER_POOLS,
    API_KEY,
    AWS_IAM,
    AWS_LAMBDA,
    Authorization,
    Identity,
    OPENID_CONNECT,
} from '../../../client/src'
import {
    Authorizations,
} from '../../../client/src'

export default function useLambdaIdentity(identity: Authorization, opts?: mockOptions): Identity {
    if (identity === Authorizations.AWS_IAM) {
        const mock: AWS_IAM = {
            accountId: 'string',
            cognitoIdentityPoolId: 'string',
            cognitoIdentityId: 'string',
            sourceIp: [opts?.sourceIp || 'undefined'],
            username: opts?.username || 'undefined',
            userArn: 'string',
            cognitoIdentityAuthType: 'string',
            cognitoIdentityAuthProvider: 'string',
        }
        return mock
    }
    else if (identity === Authorizations.AMAZON_COGNITO_USER_POOLS) {
        const mock: AMAZON_COGNITO_USER_POOLS = {
            sub: opts?.sub || 'undefined',
            issuer: 'string',
            username: opts?.username || 'undefined',
            claims: {},
            sourceIp: [opts?.sourceIp || 'undefined'],
            defaultAuthStrategy: 'string',
            groups: ['admin', 'member'],
        }
        return mock
    }
    else if (identity === Authorizations.AWS_LAMBDA) {
        const mock: AWS_LAMBDA = {
            resolverContext: opts?.resolverContext || 'undefined',
        }
        return mock
    }
    else if (identity === Authorizations.OPENID_CONNECT) {
        const mock: OPENID_CONNECT = {
            claims: {
                sub: opts?.sub || 'undefined',
                aud: 'string',
                azp: 'string',
                iss: 'string',
                exp: 1630923679,
                iat: 1630837279,
                gty: 'string',
            },
            issuer: 'string',
            sub: opts?.sub || 'undefined',
        }
        return mock
    }
    else {
        const mock: API_KEY = null
        return mock
    }
}

interface mockOptions {
    sub: string
    username: string
    sourceIp: string
    resolverContext: any
}
