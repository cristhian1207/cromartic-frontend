import { SocialNetworkCompany } from './social-network-company';
export class SocialNetwork {
    constructor(
        public id: BigInteger,
        public username: string,
        public company: SocialNetworkCompany,
        public url: string        
    ){}
}
