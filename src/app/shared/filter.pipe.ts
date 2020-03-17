import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], keyword: string): any[] {
    if (!items) {
      return [];
    }
    if (!keyword) {
      return items;
    }
    keyword = keyword.toLowerCase();
    return items.filter( search => {
      if (search['title'] == null) {
        return search['player'].toLowerCase().includes(keyword) || search['rank'].toLowerCase().includes(keyword)
        || search['score'].toLowerCase().includes(keyword) || search['time'].toLowerCase().includes(keyword)
        || search['status'].toLowerCase().includes(keyword);
      }
    return search['title'].toLowerCase().includes(keyword) 
    || search['platform'].toLowerCase().includes(keyword)
    || search['genre'].toLowerCase().includes(keyword) 
    || search['rating'].toLowerCase().includes(keyword)
    || search['publisher'].toLowerCase().includes(keyword) 
    || search['release'].toLowerCase().includes(keyword)
    || search['status'].toLowerCase().includes(keyword);
    });
  }
}