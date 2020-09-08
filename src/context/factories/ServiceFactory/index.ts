import { IIAMService, IIAMServiceConfig } from '../../../services/IAM/interfaces';
import PingId from '../../../services/IAM/PingId';
import SitesService from '../../../services/Sites';
import { ISiteConfig, ISitesService } from '../../../services/Sites/interfaces';
import FactoryBase from '../baseClasses/FactoryBase';


export default class ServiceFactory extends FactoryBase {
  private static iamService?: IIAMService;
  private static sitesSerivce?: ISitesService;

  constructor() {
    super();
    this.getSiteService = this.getSiteService.bind(this);
    this.getIAMService = this.getIAMService.bind(this);
  }

  public getIAMService(): IIAMService {
    if (!ServiceFactory.iamService) {
      ServiceFactory.iamService = new PingId(
        this.config.getServiceConfig('iam') as IIAMServiceConfig,
        this.logger,
      );
    }

    return ServiceFactory.iamService;
  }

  public getSiteService(): ISitesService {
    if (ServiceFactory.sitesSerivce === undefined) {
      ServiceFactory.sitesSerivce = new SitesService(this.config.getServiceConfig("sites") as ISiteConfig);
    }
    return ServiceFactory.sitesSerivce;
  }

}
