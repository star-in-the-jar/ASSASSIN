type BloodResultType = {
  min: number;
  max: number;
  value: number;
};

export const getReadableTextsBasedOnBloodResult = (
  bloodResults: Record<string, BloodResultType>
) => {
  const odchylOdNormy: string[] = [];
  const mozePowodowac: string[] = [];

  const bloodResultKeys = Object.keys(bloodResults);
  bloodResultKeys.forEach((bloodResultKey: string) => {
    const bloodResult = bloodResults[bloodResultKey];
    if (bloodResult.value < bloodResult.min) {
      odchylOdNormy.push(`Niski wskaźnik ${bloodResultKey}`);
    } else if (bloodResult.value > bloodResult.max) {
      odchylOdNormy.push(`Wysoki wskaźnik ${bloodResultKey}`);
    }

    if (bloodResult.value > bloodResult.max) {
      mozePowodowac.push(
        `Problemy związane z wysokim wskaźnikiem ${bloodResultKey}`
      );
    }

    if (bloodResult.value < bloodResult.min) {
      mozePowodowac.push(
        `Problemy związane z niskim wskaźnikiem ${bloodResultKey}`
      );
    }
  });

  return {
    odchylOdNormy,
    mozePowodowac,
  };
};
