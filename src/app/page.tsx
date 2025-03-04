import { PageHeader } from "@/components/PageHeader/PageHeader";
import styles from "./page.module.scss";
import { MatchHeader } from "@/components/MatchHeader/MatchHeader";
import { getMatches } from "@/lib/actions";

export default async function Home() {
  const matches = await getMatches();
  return (
    <main className={styles.app}>
      {!matches.ok ? <PageHeader error={matches.error} /> : <PageHeader />}
      <div className={styles.content}>
        {matches.data.matches.map(match => (
          <MatchHeader
            key={match.title}
            homeTeam={match.homeTeam}
            awayTeam={match.awayTeam}
            homeScore={match.homeScore}
            awayScore={match.awayScore}
            status={match.status}
          />
        ))}
      </div>
    </main>
  );
}
