import { SvgIconProps } from '@material-ui/core/SvgIcon';
import { IEnum } from '.';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

export class Page implements IEnum<Page> {
  private static _values = new Array<Page>();

  public static readonly DOCUMENT = new Page(
    '/documents/document',
    '문서',
    '문서 설명~~~',
    'eSignon | 문서',
    'eSignon 문서 설명',
    WorkOutlineIcon,
  );

  public static readonly TEMPLATE = new Page(
    '/templates/template',
    '서식',
    '서식 설명~~~',
    'eSignon | 서식',
    'eSignon 서식 설명',
    MailOutlineIcon,
  );

  public static readonly BRANDING = new Page(
    '/branding',
    '브랜딩',
    '브랜딩 설명~~~',
    'eSignon | 브랜딩',
    'eSignon 브랜딩 설명',
    ColorLensIcon,
  );

  public static readonly SETTINGS = new Page(
    '/settings',
    '설정',
    '설정 설명~~~',
    'eSignon | 설정',
    'eSignon 설정 설명',
    SettingsIcon,
  );

  /**
   * constructor
   * @param relativeUrl relative url
   * @param pageTitle page title
   * @param pageDescription page description
   * @param title seo title
   * @param metaDescription seo meta description
   * @param icon page icon
   */
  private constructor(
    public readonly relativeUrl: string,
    public readonly pageTitle: string,
    public readonly pageDescription: string,
    public readonly title: string,
    public readonly metaDescription: string,
    public readonly icon: React.ComponentType<SvgIconProps>,
  ) {
    Page._values.push(this);
  }

  /**
   * Instance array
   */
  static get values(): Page[] {
    return this._values;
  }

  /**
   * @inheritdoc
   */
  equals = (target: Page): boolean => this.relativeUrl === target.relativeUrl;

  /**
   * @inheritdoc
   */
  toString = (): string =>
    `${this.relativeUrl}, ${this.pageTitle}, ${this.pageDescription}`;

  /**
   * get instance
   * @param relativeUrl relativeUrl
   */
  static of(relativeUrl: string): Page {
    const page = Page.values
      .filter(e => relativeUrl === e.relativeUrl)
      .find(e => !!e);
    if (!page) {
      throw new Error(`Get instance failed. relativeUrl=${relativeUrl}`);
    }
    return page;
  }
}
