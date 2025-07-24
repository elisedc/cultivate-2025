import Menu from "../menu/menu";
import strings from "../resources/strings";

export default function Information() {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-background">
                <h1 className="text-4xl text-on-primary mb-4">{strings.information}</h1>
                <p className="text-lg text-on-primary-variant">
                    詳細的演出資訊將在活動前公布，敬請期待！
                </p>
            </div>
            <Menu style="dark" />
        </>
    );
}