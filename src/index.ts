import Application from "./components/Application/index";
import Reels from "./components/Reels/index";
import "./style.css";

window.onload = async (): Promise<void> => {
    const app = new Application();
    await app.loadAssets();

    const reels = new Reels(app.loader);
    // app.addReels(reels);
};
