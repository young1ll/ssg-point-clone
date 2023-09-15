export function birthFormatHelper(
  birthNum: string,
  birthFormat?: "yyyy-mm-dd" | "yyyymmdd" | "yy-mm-dd" | "yymmdd"
) {
  const year = birthNum.slice(0, 4);
  const month = birthNum.slice(4, 6);
  const day = birthNum.slice(6, 8);

  switch (birthFormat) {
    case "yyyy-mm-dd":
      return `${year}-${month}-${day}`;
    case "yyyymmdd":
      return `${year}${month}${day}`;
    case "yy-mm-dd":
      const shortYear = year.slice(2);
      return `${shortYear}-${month}-${day}`;
    case "yymmdd":
      const shortYearWithoutLeadingZero = String(Number(year.slice(2)));
      return `${shortYearWithoutLeadingZero}${month}${day}`;
    default:
      throw new Error("Unsupported birthFormat");
  }
}

export function phonHyphenShow(phoneNum: string) {
  const first = phoneNum.slice(0, 3);
  const second = phoneNum.slice(3, 7);
  const third = phoneNum.slice(7, 10);

  return { first } + "-" + { second } + "-" + { third };
}

export function dateFormatter(date: string) {
  const parts = date.split("/");
  const result = parts.join("-");
  return result;
}

export function getDDay(end: string) {
  const currentDate = new Date();
  const endDateParts = end.split("/");

  const endYear = parseInt(endDateParts[0]);
  const endMonth = parseInt(endDateParts[1]) - 1;
  const endDay = parseInt(endDateParts[2]);

  const expirationDate = new Date(endYear, endMonth, endDay);

  const timeDifference = expirationDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysRemaining;
}

export function dateHyphenSlashConverter(
  date: Date | string,
  hyphen: boolean = false
) {
  if (typeof date === "string") {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const divider = hyphen ? "/" : "-";
  return year + divider + month + divider + day;
}

export function getDayListThisMonth(today: Date) {
  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth();

  const startDate = new Date(thisYear, thisMonth, 1).getDate().toString();
  const endDate = new Date(thisYear, thisMonth + 1, 0).getDate().toString();

  const dateArray = [];
  for (let i = Number(startDate); i <= Number(endDate); i++) {
    dateArray.push(String(i));
  }
  return dateArray;
}

export function generateCalendar(today: Date) {
  const calendar = [];

  const thisYear = today.getFullYear();
  const thisMonth = today.getMonth();

  const daysInThisMonth = new Date(thisYear, thisMonth + 1, 0).getDate(); // 이번 달의 말일
  const prevMonthLastDate = new Date(thisYear, thisMonth, 0).getDate(); // 이전 달의 말일

  const thisFirstDay = new Date(thisYear, thisMonth, 1).getDay(); // 이번 달 1일 요일

  // 첫 주 중 이전 달의 마지막주 일 수만큼 제외
  for (
    let i = prevMonthLastDate - thisFirstDay + 1;
    i <= prevMonthLastDate;
    i++
  ) {
    calendar.push("");
  }

  // 이번 달 추가
  for (let i = 1; i <= daysInThisMonth; i++) {
    calendar.push(i);
  }

  // 다음 달의 마지막 일 수를 이번 달의 마지막 주에 채우기
  const nextMonthStart = 42 - calendar.length;
  for (let i = 1; i <= nextMonthStart; i++) {
    calendar.push("");
  }

  return calendar;
}

export function addHyphensToNumber(input: string): string {
  // 숫자만 남기고 모든 공백 및 하이픈 제거
  const cleanInput = input?.replace(/[\s-]/g, "");

  // 4자리 마다 하이픈을 추가
  const formattedInput = cleanInput?.replace(/(.{4})/g, " $1 -");

  // 마지막에 추가된 하이픈 제거
  return formattedInput?.slice(0, -1);
}
