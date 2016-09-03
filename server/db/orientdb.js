/**
 * Created by Colus on 2016. 8. 26..
 */
import { ODatabase } from 'orientjs';

const db = new ODatabase({
  host:     '192.168.0.28',
  port:     2424,
  username: 'root',
  password: 'juno2989',
  name:     'my-resume',
  pool: { max: 10 }
});

db.open();

export function getInitialData(id) {
  
  let object = new Object();
  
  return db.select(`
        @rid as id, 
        id as resumeId,
        name as resumeName,
        user.name as name, 
        user.moto as moto, 
        user.phone as phone, 
        user.email as email,
        user.birthDate as birthDate, 
        user.address as address, 
        user.homepage as homepage`
  ).from('myResume').where({id: id}).one()
    .then(result => {
      object = result;
      return db.select('Expand(contents)').from(result.id).all();
    })
    .then(result => {
      
      object.contents = new Object();
      
      return Promise.all(result.map(resumeContent => {
        if ( object.contents[resumeContent.type] ) {
          object.contents[resumeContent.type] = new Array();
        }
        return db.select('Expand(content)').from(resumeContent['@rid']).order('order').all()
          .then(content => {
            object.contents[resumeContent.type] = content;
            return content;
          });
      }));
      // .then(() => res.json(object));
    })
    .then( () => object );
}

export default db;