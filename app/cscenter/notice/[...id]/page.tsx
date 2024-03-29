
export default function NoticeDetailPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="mt-9 px-5">
        {thisBoard.data.map((board: any) => (
          <>
            <div className="pt-10 pb-4">
              <p className="text-lg">{board.title}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: board.content }} />
          </>
        ))}
      </div>
    </>
  );
}
