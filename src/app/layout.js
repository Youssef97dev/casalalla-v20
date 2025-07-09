import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Casa Lalla Takerkoust - Lalla Takerkoust Vibe Agafay Desert",
  description:
    "Casalalla Restaurant is a must-visit dining destination near Marrakech, located by the stunning barrage Lalla Takerkoust. This culinary gem offers an exceptional experience with a delightful blend of Moroccan cuisine and international dishes, all prepared with fresh, local ingredients. Enjoy breathtaking views of Lalla Takerkoust Lake and the Atlas Mountains, making it the perfect backdrop for a memorable meal.",
  keywords:
    "Casalalla, barrage lalla Takerkoust, lalla takerkoust lake, lalla takerkoust activities, restaurant, Moroccan cuisine, Restaurants à Lalla takerkoust, Restaurants à Marrakech, Restaurants à Agafay, Restaurants à Imlil, Restaurants Désert Agafay, Restaurants Montagnes Atlas, Riad Marrakech, Hotel Riad Casa Lalla",
  verification: {
    google: "WleKnHMlv2-IUhmNP2UlP7vcheVTK09fLKHwSmVFt3c",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-1GSVC5EJ1N" />
      <body>{children}</body>
    </html>
  );
}
