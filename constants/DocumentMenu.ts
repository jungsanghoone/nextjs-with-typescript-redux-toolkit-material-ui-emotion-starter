/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/newline-after-import */
import { IEnum } from '.';
export class DocumentMenu implements IEnum<DocumentMenu> {
  private static _values = new Array<DocumentMenu>();

  public static readonly ALL = new DocumentMenu(
    'myturn,progress,complete,canceled,disposal',
    'WORKFLOW_view_all',
    '/images/icon-all.png',
  );

  public static readonly MYTURN = new DocumentMenu(
    'myturn',
    'WORKFLOW_view_myturn',
    '/images/icon-mine.png',
  );

  public static readonly PROGRESS = new DocumentMenu(
    'progress',
    'WORKFLOW_view_progress',
    '/images/icon-play.png',
  );

  public static readonly COMPLETE = new DocumentMenu(
    'complete',
    'WORKFLOW_view_complete',
    '/images/icon-complete.png',
  );

  public static readonly CANCELED = new DocumentMenu(
    'canceled',
    'WORKFLOW_view_canceled',
    '/images/icon-cancel.png',
  );

  public static readonly DISPOSAL = new DocumentMenu(
    'disposal',
    'WORKFLOW_view_disposal',
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
