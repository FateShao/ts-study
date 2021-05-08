import ProjectMgr from "./ProjectMgr";

const {ccclass, property} = cc._decorator;
enum CHESS {
    SHUAI,
    PAO,
    BIN,
    ZU,
    JIANG,
    SHI,
    SHI1,
    XIANG,
    MA,
    MA1,
    PAO1,
}
@ccclass
export default class Point extends cc.Component {
    @property({ type: cc.AudioClip })
    aduio: cc.AudioClip = null;
    pos: cc.Vec2 = new cc.Vec2();
    start () {
        
    }

    click() {
        cc.audioEngine.playEffect(this.aduio,false);
        this.node.parent.removeAllChildren();
        console.warn(this.pos);
        let x =  ProjectMgr.S().lastChose.getComponent("Chess").pos.x;
        ProjectMgr.S().lastChose.getComponent("Chess").pos = this.pos; 
        ProjectMgr.S().lastChose.getComponent("Chess").setPos();
        ProjectMgr.S().lastChose.getChildByName("chose").active = false;

        if (ProjectMgr.S().lastChose.getComponent("Chess").chessType === CHESS.SHI1) {
            ProjectMgr.S().failshicall();
            return;
        }

        if (ProjectMgr.S().lastChose.getComponent("Chess").chessType === CHESS.PAO || ProjectMgr.S().lastChose.getComponent("Chess").chessType === CHESS.BIN) {
            ProjectMgr.S().failpaocall();
            return;
        }
     
        if (this.pos.x === 6 && this.pos.y === 9) {
            ProjectMgr.S().failma1call();
            return;
        } 

        if (this.pos.x === 6 && this.pos.y === 5) {
            ProjectMgr.S().failma2call();
            return;
        } 

        if (this.pos.x === 5 && this.pos.y === 8) {
            ProjectMgr.S().failma3call();
            return;
        } 

        // if (ProjectMgr.S().step === 0) {
        //     if (this.pos.x != 5 || this.pos.y != 6) {
        //         ProjectMgr.S().failcall();
        //     } 
        // }

        if (ProjectMgr.S().step === 1) {
            if (this.pos.x != 3  || this.pos.y != 7) {
                if (this.pos.x === 3 && this.pos.y === 5) {
                    ProjectMgr.S().failcall();
                    return
                }
                ProjectMgr.S().failpaocall();
                return
            } 

            if (this.pos.x === 3  && this.pos.y === 7) {
                ProjectMgr.S().wincall();
                return
            } 
           
        }

        // if (ProjectMgr.S().step === 2) {
        //     if (this.pos.x != 4  || this.pos.y != 1) {
        //         ProjectMgr.S().failcall();
        //     }else{
        //         ProjectMgr.S().wincall();
        //     }
        // }



        ProjectMgr.S().moveEnemy();

        
    }
}
