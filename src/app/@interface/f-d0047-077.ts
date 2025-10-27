export interface FD0047077 {}

// 宣告interface的第一個字要大寫
// export interface JsonData {
//   name: string;
//   age: number;
// }

// export interface UserArray {
//   userName: string;
//   lev: number;
//   props: Array<Props>;
// }

// export interface Props {
//   propsName: string;
//   amount: number;
// }

export interface F007 {
  success: string;
  result: Result;
  records: Records;
}

export interface Records {
  Locations: RecordsLocation[];
}

export interface RecordsLocation {
  DatasetDescription: string;
  LocationsName: string;
  Dataid: string;
  Location: LocationLocation[];
}

export interface LocationLocation {
  LocationName: string;
  Geocode: string;
  Latitude: string;
  Longitude: string;
  WeatherElement: WeatherElement[];
}

export interface WeatherElement {
  ElementName: ElementName;
  Time: Time[];
}

export enum ElementName {
  The3小時降雨機率 = '3小時降雨機率',
  天氣現象 = '天氣現象',
  天氣預報綜合描述 = '天氣預報綜合描述',
  溫度 = '溫度',
  相對濕度 = '相對濕度',
  舒適度指數 = '舒適度指數',
  露點溫度 = '露點溫度',
  風向 = '風向',
  風速 = '風速',
  體感溫度 = '體感溫度',
}

export interface Time {
  DataTime?: Date;
  ElementValue: ElementValue[];
  StartTime?: Date;
  EndTime?: Date;
}

export interface ElementValue {
  Temperature?: string;
  DewPoint?: string;
  RelativeHumidity?: string;
  ApparentTemperature?: string;
  ComfortIndex?: string;
  ComfortIndexDescription?: ComfortIndexDescription;
  WindSpeed?: string;
  BeaufortScale?: string;
  WindDirection?: WindDirection;
  ProbabilityOfPrecipitation?: string;
  Weather?: Weather;
  WeatherCode?: string;
  WeatherDescription?: string;
}

export enum ComfortIndexDescription {
  悶熱 = '悶熱',
  舒適 = '舒適',
}

export enum Weather {
  多雲 = '多雲',
  晴 = '晴',
  短暫陣雨 = '短暫陣雨',
  陰 = '陰',
}

export enum WindDirection {
  偏北風 = '偏北風',
  偏南風 = '偏南風',
  偏東風 = '偏東風',
  偏西風 = '偏西風',
  東北風 = '東北風',
  東南風 = '東南風',
  西北風 = '西北風',
  西南風 = '西南風',
}

export interface Result {
  resource_id: string;
  fields: Field[];
}

export interface Field {
  id: string;
  type: Type;
}

export enum Type {
  String = 'String',
  Timestamp = 'Timestamp',
}
