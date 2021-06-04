import { shopifyService } from './shopify.service';

export namespace shopService {
  export function get() {
    return shopifyService.getShop();
  }
}

export type { GetShopQuery } from './shopify.service';
