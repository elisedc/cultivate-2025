import strings from '../resources/strings';
import skyImage from '../resources/sky.png';
import fieldsImage from '../resources/fields.png';
import songsJson from '../resources/songs.json';
import performersJson from '../resources/performers.json';

function Performer(props: {
    position: string,
    performerId: string
}) {
    function positionToIcon(position: string) {
        switch (position) {
            case 'vocal':
                return '🎤';
            case 'guitar':
                return '🎸';
            case 'bass':
                return '🎸';
            case 'drums':
                return '🥁';
            case 'keyboard':
                return '🎹';
            default:
                return '';
        }
    }

    const { position, performerId } = props;
    const performer = performersJson.find(p => p.id === performerId);
    return (performer &&
        (<div className="text-md text-on-primary-variant bg-background rounded-full px-2 py-1 font-serif">
            {positionToIcon(position) + ' '}
            {
                performer.link ?
                    <a href={performer.link} className="underline" target="_blank">{performer.name}</a>
                    : performer.name
            }
        </div>)
    );
}

function Song(props: {
    song: {
        name: string;
        translatedName?: string;
        artist: string;
        performers: string[][];
    }, index: number
}) {
    const { song, index } = props;
    return (
        <div className="mx-4">
            <div className="flex items-center gap-8 p-4 my-1">
                {/* Song order */}
                <h1 className="text-6xl text-on-primary font-bold">
                    {index + 1}
                </h1>
                <div>
                    {/* Song name & artist */}
                    <h2 className="text-2xl font-bold text-on-primary">
                        {song.name}
                        {
                            song.translatedName && (
                                <span className="text-xl font-normal text-on-primary-variant">
                                    （{song.translatedName}）
                                </span>
                            )
                        }
                    </h2>
                    <p className="text-lg text-on-primary-variant">{song.artist}</p>
                    {/* Performers */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {song.performers.map(([position, performerId]) => (
                            <Performer
                                key={position + '-' + performerId}
                                position={position}
                                performerId={performerId}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {index < songsJson.length - 1 && (
                <hr className="border-t border-on-primary-variant opacity-30" />
            )}
        </div>
    )
}

export default function Program() {
    return (
        <main style={{'backgroundImage': `url(${skyImage})`}} className="relative overflow-y-auto w-svw h-svh bg-cover bg-center">
            <div className="absolute w-full h-full flex flex-col">
                <h3 className="text-2xl lg:text-3xl text-on-primary-variant text-center mt-8 mb-2">
                    {strings.eventFullName}
                </h3>
                <h1 className="text-5xl lg:text-7xl text-center text-on-primary mb-4">
                    {strings.program}
                </h1>
                {songsJson.map((songInfo, index) => (
                    <Song key={index} song={songInfo} index={index} />))}
                <img src={fieldsImage} alt="Fields" className="object-contain -mt-28 pointer-events-none" />
            </div>
        </main>

    )
}
