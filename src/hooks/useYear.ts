import { useParams } from "next/navigation";

/**
 * URLの[year]パラメータを取得するカスタムフック
 * パラメータが存在しない場合は現在の年を返す
 */
export function useYear(): { paramYear: string; realYear: string } {
	const params = useParams();
	const realYear = new Date().getFullYear().toString();
	// paramsから年を取得し、存在しない場合は現在の年を返す
	return {
		paramYear: (params?.year as string) || new Date().getFullYear().toString(),
		realYear: realYear,
	};
}
