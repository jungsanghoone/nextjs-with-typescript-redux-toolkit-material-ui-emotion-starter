import { IEnum } from '.';
export class Page implements IEnum<Page> {
  private static _values = new Array<Page>();

  public static readonly DOCUMENT = new Page(
    '/documents/document',
    '문서',
    '문서 설명~~~',
    '/images/icon-document-blue.png',
    '/images/icon-document.png',
  );

  public static readonly TEMPLATE = new Page(
    '/templates/template',
    '서식',
    '서식 설명~~~',
    '/images/icon-form-blue.png',
    '/images/icon-form.png',
  );

  public static readonly BRANDING = new Page(
    '/branding',
    '브랜딩',
    '브랜딩 설명~~~',
    '/images/icon-branding-blue.png',
    '/images/icon-branding.png',
  );

  public static readonly SETTINGS = new Page(
    '/settings',
    '설정',
    '설정 설명~~~',
    '/images/icon-set-blue.png',
    '/images/icon-set.png',
  );

  /**
   * constructor
   * @param relativeUrl relative url
   * @param pageTitle page title
   * @param pageDescription page description
   * @param selectIcon page select icon
   * @param icon page icon
   */
  private constructor(
    public readonly relativeUrl: string,
    public readonly pageTitle: string,
    public readonly pageDescription: string,
    public readonly selectIcon: string,
    public readonly icon: string,
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
