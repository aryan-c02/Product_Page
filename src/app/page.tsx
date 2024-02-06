'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    router.push('/pages/ProductPage');
    setIsLoading(false);
  }, [])

  return (
    <div>

    </div>
  );
}
