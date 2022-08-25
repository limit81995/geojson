import {Controller, Get, Post, Req} from '@nestjs/common';
import * as turf from "@turf/turf";
import {Request} from "express";
import {AppService} from "./app.service";
import {CommonService} from "./common/common.service";
import GeoJson from "./app/data/GeoJson.data"
@Controller()
export class AppController {
  @Get()
  index(@Req() req: Request): object {
    try{
      let lng:number = parseFloat(<any>req.query.lng) || 0;
      let lat:number = parseFloat(<any>req.query.lat) || 0;
      let lng_lat = [lng,lat]  //经纬度

      // //GEOJSON的区域块
      // let chuck = turf.polygon(AppService.getPolygonChuckByGeojson({}));
      // let result = turf.booleanPointInPolygon(point,chuck);

      let res:any;
      for(let i in GeoJson.data){
        res = AppService.getPointInPolygonByGeoJson(lng_lat,GeoJson.data[i])
        console.log(res)
        if(res?.exist == true){
          break;
        }
      }
      return CommonService.success(res);

    }catch (e) {
      CommonService.error(e.toString())
    }
  }

}
