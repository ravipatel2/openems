import { routing, appRoutingProviders } from './../app.routing';
import { Config, Meta, ThingMeta } from './device/config';
import { Dataset, EMPTY_DATASET } from './chart';
import { Service, Notification } from './service/service';
import { Utils } from './service/utils';
import { Websocket } from './service/websocket';

export { Service, Utils, Notification, Websocket, Dataset, EMPTY_DATASET, Config, Meta, ThingMeta };

//TODO
export interface Log { }
export interface QueryReply { }
export interface ChannelAddresses { }
export class Data {
    summary: any
}
export interface Summary { }