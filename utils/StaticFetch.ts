import Pages from "@/data/page.sidebar.json";
import { PageType } from "@/type/Page";

export const staticPageFetch = {
  getAPageByName: (name: string) => {
    return Pages.find((page) => page.name === name);
  },

  // 페이지리스트
  getPageListByEachName: (eachList: string[]) => {
    const resultPages: PageType[] = [];

    eachList.forEach((each) => {
      const foundPage = Pages.find((item) => item.name === each);
      if (foundPage) {
        resultPages.push(foundPage);
      }
    });

    return resultPages;
  },

  getChildrenPageByParentName: (parentName: string) => {
    const parentPage = Pages.find((page) => page.name == parentName);
    return Pages.filter((childPage) => childPage.parent_id == parentPage?.id);
  },

  getPagesByIdList: (idList: number[]) => {
    const pageMap = new Map(Pages.map((page) => [page.id, page]));
    const resultPages = idList.map((id) => pageMap.get(id));
    return resultPages.filter((page) => page !== undefined);
  },
};
