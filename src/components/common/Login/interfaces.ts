import { IIAMService } from '../../../services/IAM/interfaces';

export interface ILogin {
    iamService: IIAMService;
    redirectUrl: string;
}
