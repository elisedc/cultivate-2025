import './welcome.css';

import skyImage from '../resources/sky.png';
import sunImage from '../resources/sun.png';
import fieldsImage from '../resources/fields.png';
import notesImage from '../resources/notes.png';

export function Welcome() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <img src={skyImage} alt="Sky" className="absolute w-full h-full object-cover animate-sky-brighten" />
      <img src={sunImage} alt="Sun" className="absolute w-full h-full object-cover animate-sunrise" />
      <img src={fieldsImage} alt="Fields" className="absolute w-full h-full object-cover animate-fields-brighten" />
      <img src={notesImage} alt="Notes" className="absolute w-full h-full right-0 object-cover object-right animate-notes-sweep" />

      <div className="absolute top-1/2 md:left-12 transform -translate-y-12 flex flex-col items-center md:items-start gap-4 not-md:w-screen">
        <h1 className="text-7xl md:text-9xl text-center text-on-primary opacity-0 animate-fade-up">
          耕耘季
        </h1>
        <h3 className="text-3xl md:text-4xl text-center text-on-primary-variant opacity-0 animate-fade-up-delay-1">
          Cultivate 2025
        </h3>
        <button
          className="bg-background text-on-primary font-serif rounded-full text-2xl transition hover:brightness-105 p-4 opacity-0 animate-fade-up-delay-1"
        >
          查看節目表
        </button>
      </div>

    </main >
  );
}
