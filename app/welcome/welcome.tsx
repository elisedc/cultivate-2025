import skyImage from './sky.png';
import sunImage from './sun.png';
import fieldsImage from './fields.png';
import notesImage from './notes.png';

import './welcome.css';

export function Welcome() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <img src={skyImage} alt="Sky" className="absolute w-full h-full object-cover animate-sky-brighten" />
      <img src={sunImage} alt="Sun" className="absolute w-full h-full object-cover animate-sunrise" />
      <img src={fieldsImage} alt="Fields" className="absolute w-full h-full object-cover animate-fields-brighten" />
      <img src={notesImage} alt="Notes" className="absolute w-full h-full object-cover animate-notes-sweep" />
    </main>
  );
}
