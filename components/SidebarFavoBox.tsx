export default function SidebarFavoBox() {
  const ICON_FAVO =
    "bg-[url('/images/icon_favorite.png')] bg-center bg-no-repeat bg-[24px_auto]";

  return (
    <div className="relative bg-[#fff9ea] box-border pt-[26px] pb-[24px]">
      <div className="hidden justify-between px-5">
        {/* {Pages && Pages.map((i) => i.name)} */}
      </div>
      <p className="relative h-20 w-[calc(100%-48px)] mx-6 pl-[58px] pt-[18px] border border-dashed border-[#f8b404] box-border">
        <button
          className={`absolute left-[10px] top-1/2 -translate-y-1/2 indent-[-999em] w-10 h-10 border border-[#f8b404] rounded-full ${ICON_FAVO}`}
        >
          즐겨찾기 메뉴 선택
        </button>
        <span className="text-[12px] leading-[20px] tracking-[-.5px]">
          <button
            className={`relative pr-1 pl-[1px] font-bold tracking-[-.5px] z-[1]`}
          >
            즐겨찾기 메뉴 선택
          </button>
          에서
          <br />
          나만의 즐겨찾기 메뉴를 설정할 수 있어요!
        </span>
      </p>
    </div>
  );
}
