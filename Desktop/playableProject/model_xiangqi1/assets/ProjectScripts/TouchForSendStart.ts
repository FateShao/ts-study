import PlayableAdModule from "../Scripts/Common/Modules/AdModule/PlayableAdModule";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TouchForSendStart extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    // onLoad() {}

    @property({type:cc.AudioClip})
    music: cc.AudioClip = null;

    start() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        const touchEventName = 'ontouchstart' in window ? 'touchstart' : 'mousedown';
        const myBgFun = function() {
            PlayableAdModule.S().jhjudge = true;
            console.log('here TouchForSendStart');
            PlayableAdModule.S().gameStart();
            cc.game.canvas.removeEventListener(touchEventName, myBgFun);
            self.node.removeComponent(TouchForSendStart);
            cc.audioEngine.playMusic(self.music,true);
        };
        cc.game.canvas.addEventListener(touchEventName, myBgFun);
    }

    // update (dt) {}
}
