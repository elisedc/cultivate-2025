import strings from '../resources/strings';
import skyImage from '../resources/sky.png';
import fieldsImage from '../resources/fields.png';
import songsJson from '../resources/songs.json';

export default function Program() {
    return (
        <main className="relative w-screen h-screen overflow-hidden">
            <img src={skyImage} alt="Sky" className="absolute w-full h-full object-cover" />
            <div className="absolute w-full h-full overflow-y-auto">
                <h1 className="text-5xl text-center text-on-primary m-8">
                    {strings.eventFullName} — {strings.program}
                </h1>
                {
                    songsJson.map((song, index) => (
                        <div key={index} className="mx-4">
                            <div className="p-4 my-1">
                                <h2 className="text-2xl font-bold text-on-primary">{song.name}</h2>
                                <p className="text-lg text-on-primary-variant">{song.artist}</p>
                            </div>
                            {index < songsJson.length - 1 && (
                                <hr className="border-t border-on-primary-variant" />
                            )}
                        </div>
                    ))
                }
            </div>
            <img src={fieldsImage} alt="Fields" className="absolute bottom-0 object-contain md:object-cover md:w-full md:h-full transform translate-y-20 md:translate-y-56 pointer-events-none" />
        </main>

    )
}
