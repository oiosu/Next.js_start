// ---------------
// next.js 에서 페이지나 컴포넌트가 서버 측 데이터 처리를 수행하는 경우,
// 'lib' 디렉토리를 자주 사용하여 서버 관련 로직을 분리함
// 'lib' 디렉토리는 서버로직, API 호출, 파일 시스템 작업 등 처리하는데 적합
// ---------------
import fs from 'fs';
import path from 'path';
//gray-matter를 사용하여 메타 데이터 추출 후 필요한 데이터 가공하여 반환
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

//getPosts는 실제 파일 시스템에서 마크다운 파일을 읽음
export function getPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
      description: data.description,
      content,
    };
  });
}
