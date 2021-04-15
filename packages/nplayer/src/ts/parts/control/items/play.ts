import {
  addDisposable, addDisposableListener, Component, hide, show,
} from 'src/ts/utils';
import { Icon } from 'src/ts/features/icons';
import { Player } from 'src/ts/player';
import { EVENT } from 'src/ts/constants';
import { I18n, PAUSE, PLAY } from 'src/ts/features/i18n';
import { Tooltip } from 'src/ts/components/tooltip';
import { ControlItem } from '..';

class Play extends Component implements ControlItem {
  private playIcon!: HTMLElement;

  private pauseIcon!: HTMLElement;

  tooltip!: Tooltip;

  constructor() {
    super();
    this.playIcon = this.element.appendChild(Icon.play());
    this.pauseIcon = this.element.appendChild(Icon.pause());
  }

  init(player: Player, tooltip: Tooltip) {
    this.tooltip = tooltip;

    if (player.paused) {
      this.onPause();
    } else {
      this.onPlay();
    }
    addDisposable(this, player.on(EVENT.PLAY, this.onPlay));
    addDisposable(this, player.on(EVENT.PAUSE, this.onPause));
    addDisposableListener(this, this.element, 'click', player.toggle);
  }

  private onPlay = () => {
    show(this.pauseIcon);
    hide(this.playIcon);
    this.tooltip.html = I18n.t(PAUSE);
  }

  private onPause = () => {
    show(this.playIcon);
    hide(this.pauseIcon);
    this.tooltip.html = I18n.t(PLAY);
  }
}

const playControlItem = () => new Play();
playControlItem.id = 'play';
export { playControlItem };