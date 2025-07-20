// src/components/dashboard/AssetChart.tsx
import { useEffect, useState } from 'react';
import { Box, Heading, Text, Spinner, Center } from '@chakra-ui/react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// --- Tip Tanımlamaları ---
// API'den gelen varlık (asset) verisinin tipi
interface Asset {
  asset_type: string;
  amount: number;
  symbol: string;
}

// Grafik için işlenmiş verinin tipi
interface ChartData {
  name: string;
  value: number;
}

// Grafik renkleri
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

export const AssetChart = () => {
  // State'lerimizi tanımlıyoruz
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect ile component yüklendiğinde veri çekme işlemini başlatıyoruz
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await fetch('http://localhost:8000/accounts', {
          // Önceki adımdaki gibi, HttpOnly cookie'nin gönderilmesi için bu gereklidir.
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Veri alınamadı. Sunucu hatası.');
        }

        const data = await response.json();
        const assets: Asset[] = data.assets;

        // --- Veri Dönüşümü ---
        // API'den gelen veriyi grafiğin anlayacağı formata çeviriyoruz.
        // Varlıkları tiplerine göre gruplayıp toplam "amount" değerlerini hesaplıyoruz.
        const processedData = assets.reduce((acc, asset) => {
          const key = asset.asset_type;
          if (!acc[key]) {
            acc[key] = 0;
          }
          acc[key] += asset.amount;
          return acc;
        }, {} as Record<string, number>);

        // İşlenmiş objeyi Recharts'ın istediği array formatına dönüştürüyoruz.
        const formattedForChart: ChartData[] = Object.keys(processedData).map(key => ({
          name: key.charAt(0).toUpperCase() + key.slice(1), // 'stock' -> 'Stock'
          value: processedData[key],
        }));

        setChartData(formattedForChart);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('Bilinmeyen bir hata oluştu.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAccountData();
  }, []); // Boş dependency array, bu etkinin sadece bir kez çalışmasını sağlar.


  // --- Koşullu Görüntüleme ---
  // Veri yüklenirken Spinner göster
  if (loading) {
    return (
      <Center h="300px" w="100%">
        <Spinner size="xl" />
      </Center>
    );
  }

  // Hata oluşursa hata mesajını göster
  if (error) {
    return (
      <Center h="300px" w="100%">
        <Text color="red.500">Hata: {error}</Text>
      </Center>
    );
  }

  // Veri başarıyla alındıysa grafiği göster
  return (
    <Box h="300px" w="100%">
      <Heading size="md" mb={4}>VARLIK DAĞILIMI 📊</Heading>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            nameKey="name" // Tooltip'te "name" alanını göstermek için
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};