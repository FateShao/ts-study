import EventSystem from "../Scripts/Common/Modules/EventSystem/EventSystem";
import Point from "./Point";
import ProjectMgr from "./ProjectMgr";

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

const chessPath = ["0_j", "0_p", "0_z", "1_z", "1_j", "1_s", "0_s", "1_x", "1_m", "0_m","1_p"];

const { ccclass, property } = cc._decorator;

@ccclass
export default class Chess extends cc.Component {

    @property({ type: cc.Enum(CHESS) })
    chessType: CHESS = null;

    @property(cc.Vec2)
    pos: cc.Vec2 = new cc.Vec2();

    @property({ type: cc.SpriteAtlas })
    spriteAtlas: cc.SpriteAtlas = null;

    @property({ type: cc.SpriteAtlas })
    spriteAtlas1: cc.SpriteAtlas = null;

    @property({ type: cc.Prefab })
    point: cc.Prefab = null;

    @property({ type: cc.AudioClip })
    aduio: cc.AudioClip = null;

    @property({})
    our = true;

    start() {
        this.setPos();
        this.setFrame();
    }

    setPos() {
        this.node.x = -310 + this.pos.x * 77;
        this.node.y = -325 + this.pos.y * 77;
    }

    setFrame() {
        this.node.getChildByName("pic").getComponent(cc.Sprite).spriteFrame = this.spriteAtlas.getSpriteFrame(chessPath[this.chessType]);
        this.node.getChildByName("chose").getComponent(cc.Sprite).spriteFrame = this.spriteAtlas1.getSpriteFrame(chessPath[this.chessType]);
    }

    chose() {
        cc.audioEngine.playEffect(this.aduio,false);
        ProjectMgr.S().chose();
        if (!this.our || !ProjectMgr.S().canMove) {
            return
        }

        if (ProjectMgr.S().lastChose) {
            ProjectMgr.S().lastChose.getChildByName("chose").active = false;
        }
        this.node.parent.getChildByName("point").removeAllChildren();
        this.node.getChildByName("chose").active = true;
        ProjectMgr.S().lastChose = this.node;

        // 显示落点
        if (this.chessType === CHESS.SHUAI) {
            
        }else if (this.chessType === CHESS.BIN) {
            if (this.pos.x - 1 >= 0) {
                let node1 = cc.instantiate(this.point);
                node1.getComponent(Point).pos.x =  (this.pos.x - 1);
                node1.getComponent(Point).pos.y =  (this.pos.y);
                node1.x = -310 + (this.pos.x - 1) * 77;
                node1.y = -325 + (this.pos.y) * 77;
                this.node.parent.getChildByName("point").addChild(node1);
            }
           
            
            if (this.pos.y + 1 <= 9) {
                let node4 = cc.instantiate(this.point);
                node4.getComponent(Point).pos.x =  (this.pos.x);
                node4.getComponent(Point).pos.y =  (this.pos.y + 1);
                node4.x = -310 + (this.pos.x) * 77;
                node4.y = -325 + (this.pos.y + 1) * 77;
                this.node.parent.getChildByName("point").addChild(node4);
            }

            if (this.pos.x + 1 <= 8) {
                let node3 = cc.instantiate(this.point);
                node3.getComponent(Point).pos.x =  (this.pos.x + 1);
                node3.getComponent(Point).pos.y =  (this.pos.y);
                node3.x = -310 + (this.pos.x + 1) * 77;
                node3.y = -325 + (this.pos.y) * 77;
                this.node.parent.getChildByName("point").addChild(node3);
            }
        }else if (this.chessType === CHESS.PAO && this.pos.x === 3) {
           
            for (let index = 0; index < 9; index++) {
                if (index === this.pos.x) {
                    continue;
                }
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (index);
                node.getComponent(Point).pos.y =  (this.pos.y);
                node.x = -310 + index * 77;
                node.y = -325 + (this.pos.y) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }

            for (let index = 1; index < 7; index++) {
                if (index === this.pos.y) {
                    continue;
                }
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x);
                node.getComponent(Point).pos.y =  (index);
                node.x = -310 + this.pos.x * 77;
                node.y = -325 + index * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }
        }else if (this.chessType === CHESS.PAO && this.pos.x === 8) {
            let node = cc.instantiate(this.point);
            node.getComponent(Point).pos.x =  4;
            node.getComponent(Point).pos.y =  7;
            node.x = -310 + 4 * 77;
            node.y = -325 + 7 * 77;
            this.node.parent.getChildByName("point").addChild(node);

            for (let index = 6; index < 10; index++) {
                if (index === this.pos.y) {
                    continue;
                }
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x);
                node.getComponent(Point).pos.y =  (index);
                node.x = -310 + this.pos.x * 77;
                node.y = -325 + index * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }
        }else if (this.chessType === CHESS.SHI1) {
            let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x + 1);
                node.getComponent(Point).pos.y =  (this.pos.y + 1);
                node.x = -310 + (this.pos.x + 1) * 77;
                node.y = -325 + (this.pos.y + 1) * 77;
                this.node.parent.getChildByName("point").addChild(node);
        }else if (this.chessType === CHESS.MA1) {
            if (true) {
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x + 1);
                node.getComponent(Point).pos.y =  (this.pos.y + 2);
                node.x = -310 + (this.pos.x + 1) * 77;
                node.y = -325 + (this.pos.y + 2) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }
          
            let node1 = cc.instantiate(this.point);
            node1.getComponent(Point).pos.x =  (this.pos.x + 1);
            node1.getComponent(Point).pos.y =  (this.pos.y - 2);
            node1.x = -310 + (this.pos.x + 1) * 77;
            node1.y = -325 + (this.pos.y - 2) * 77;
            this.node.parent.getChildByName("point").addChild(node1);

            if (true) {
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x + 1);
                node.getComponent(Point).pos.y =  (this.pos.y + 2);
                node.x = -310 + (this.pos.x + 1) * 77;
                node.y = -325 + (this.pos.y + 2) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }

            if (true) {
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x - 1);
                node.getComponent(Point).pos.y =  (this.pos.y + 2);
                node.x = -310 + (this.pos.x - 1) * 77;
                node.y = -325 + (this.pos.y + 2) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }

            if (true) {
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x - 1);
                node.getComponent(Point).pos.y =  (this.pos.y - 2);
                node.x = -310 + (this.pos.x - 1) * 77;
                node.y = -325 + (this.pos.y - 2) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }

            if (true) {
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x - 2);
                node.getComponent(Point).pos.y =  (this.pos.y - 1);
                node.x = -310 + (this.pos.x - 2) * 77;
                node.y = -325 + (this.pos.y - 1) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }

            if (true) {
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x - 2);
                node.getComponent(Point).pos.y =  (this.pos.y + 1);
                node.x = -310 + (this.pos.x - 2) * 77;
                node.y = -325 + (this.pos.y + 1) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }

            if (this.pos.x + 2 <= 8) {
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x + 2);
                node.getComponent(Point).pos.y =  (this.pos.y - 1);
                node.x = -310 + (this.pos.x + 2) * 77;
                node.y = -325 + (this.pos.y - 1) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }

            if (this.pos.x + 2 <= 8) {
                let node = cc.instantiate(this.point);
                node.getComponent(Point).pos.x =  (this.pos.x + 2);
                node.getComponent(Point).pos.y =  (this.pos.y + 1);
                node.x = -310 + (this.pos.x + 2) * 77;
                node.y = -325 + (this.pos.y + 1) * 77;
                this.node.parent.getChildByName("point").addChild(node);
            }
            
        }
    }
}