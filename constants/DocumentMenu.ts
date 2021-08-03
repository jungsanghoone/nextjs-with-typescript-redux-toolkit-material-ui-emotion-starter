import { IEnum } from '.';
export class DocumentMenu implements IEnum<DocumentMenu> {
  private static _values = new Array<DocumentMenu>();

  public static readonly ALL = new DocumentMenu(
    'myturn,progress,complete,canceled,disposal',
    '전체보기',
    '/images/icon-all.png',
  );

  public static readonly MYTURN = new DocumentMenu(
    'myturn',
    '내 차례',
    '/images/icon-mine.png',
  );

  public static readonly PROGRESS = new DocumentMenu(
    'progress',
    '진행 중',
    '/images/icon-play.png',
  );

  public static readonly COMPLETE = new DocumentMenu(
    'complete',
    '완료',
    '/images/icon-complete.png',
  );

  public static readonly CANCELED = new DocumentMenu(
    'canceled',
    '취소',
    '/images/icon-cancel.png',
  );

  public static readonly DISPOSAL = new DocumentMenu(
    'disposal',
    '폐기',
    '/images/icon-delete.png',
  );

  /**
   * constructor
   * @param docSearchCondition search condition
   * @param menuTitle menu title
   * @param menuIcon menu icon
   */
  private constructor(
    public readonly docSearchCondition: string,
    public readonly menuTitle: string,
    public readonly menuIcon: string,
  ) {
    DocumentMenu._values.push(this);
  }

  /**
   * Instance array
   */
  static get values(): DocumentMenu[] {
    return this._values;
  }

  /**
   * @inheritdoc
   */
  equals = (target: DocumentMenu): boolean =>
    this.docSearchCondition === target.docSearchCondition;

  /**
   * get instance
   * @param docSearchCondition docSearchCondition
   */
  static of(docSearchCondition: string): DocumentMenu {
    const docMenu = DocumentMenu.values
      .filter(e => docSearchCondition === e.docSearchCondition)
      .find(e => !!e);
    if (!docMenu) {
      throw new Error(
        `Get instance failed. docSearchCondition=${docSearchCondition}`,
      );
    }
    return docMenu;
  }
}
