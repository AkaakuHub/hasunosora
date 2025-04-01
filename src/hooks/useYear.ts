import { useParams } from 'next/navigation';

/**
 * URLの[year]パラメータを取得するカスタムフック
 * パラメータが存在しない場合は現在の年を返す
 */
export function useYear(): string {
  const params = useParams();
  // paramsから年を取得し、存在しない場合は現在の年を返す
  return params?.year as string || new Date().getFullYear().toString();
}