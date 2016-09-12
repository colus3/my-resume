/**
 * Created by Colus on 2016. 8. 26..
 */
import { ODatabase } from 'orientjs';

export function getInitialData(id) {
  
  let object = new Object();
  const properties = `
        @rid as id, 
        id as resumeId,
        name as resumeName,
        user.name as name, 
        user.moto as moto, 
        user.phone as phone, 
        user.email as email,
        user.image as image,
        user.birthDate as birthDate, 
        user.address as address, 
        user.homepage as homepage`;
  
  const conditions = id ? {id: id} : {defaults: true};
  
  return db.select(properties).from('myResume').where(conditions).one()
    .then(result => {

      object = result;
      return db.select('Expand(contents)').from(result.id).order('order').all();
    })
    .then(result => {
      
      object.contents = new Object();
      return Promise.all(result.map(resumeContent => {
        if ( ! object.contents[resumeContent.type] ) {
          object.contents[resumeContent.type] = new Object();
        }
        object.contents[resumeContent.type].name = resumeContent.name;
        object.contents[resumeContent.type].type = resumeContent.type;
        object.contents[resumeContent.type].align = resumeContent.align;
        
        return db.select('Expand(content)').from(resumeContent['@rid']).order('order').all()
          .then(content => {
            
            object.contents[resumeContent.type].data = content;
            return content;
          });
      }));
    })
    .then( () => object );
}

const db = new ODatabase({
  host:     '192.168.0.28',
  port:     2424,
  username: 'root',
  password: 'juno2989',
  name:     'my-resume',
  pool: { max: 10 }
});

db.open();

export default db;
