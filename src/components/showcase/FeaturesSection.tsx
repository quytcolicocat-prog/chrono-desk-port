import { PhoneMockup } from "./PhoneMockup";
import { SearchBar } from "./ui/SearchBar";
import { PillBadge } from "./ui/PillBadge";
import { ScreenCard } from "./ScreenCard";
import { IconRow } from "./ui/IconRow";
import { ImageCard } from "./ui/ImageCard";
import { MapViewScreen } from "./screens/MapViewScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { DashboardScreen } from "./screens/DashboardScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { CalendarScreen } from "./screens/CalendarScreen";
import { NotificationScreen } from "./screens/NotificationScreen";
import { Plane, Hotel, MapPin, Calendar, User, Settings } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key Features
          </h2>
          <p className="text-white/70 text-lg">
            Everything you need in one beautiful app
          </p>
        </div>

        {/* Bento Grid Layout - Desktop: 4 columns, Tablet: 3 columns, Mobile: 2 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1400px] mx-auto">
          {/* Row 1 - Hero phone spanning 2 columns */}
          <div className="col-span-2 row-span-2">
            <PhoneMockup size="hero" delay={0.1}>
              <div className="h-full flex flex-col p-6 gap-4">
                <IconRow icons={[Plane, Hotel, MapPin, Calendar, User]} size={20} spacing="gap-4" />
                <SearchBar placeholder="Where to?" />
                <div className="flex gap-2">
                  <PillBadge text="New York" icon={MapPin} variant="default" />
                  <PillBadge text="$299" variant="accent" />
                </div>
                <button className="w-full h-14 bg-gradient-to-r from-app-blue to-app-light-blue rounded-full text-white font-semibold shadow-glow mt-auto">
                  Search Flights
                </button>
              </div>
            </PhoneMockup>
          </div>
          
          {/* Medium - Map View */}
          <div className="col-span-1">
            <PhoneMockup size="medium" delay={0.2}>
              <MapViewScreen />
            </PhoneMockup>
          </div>
          
          {/* Small - Notifications */}
          <div className="col-span-1">
            <PhoneMockup size="small" delay={0.3}>
              <NotificationScreen />
            </PhoneMockup>
          </div>
          
          {/* Row 2 - Small phones */}
          <div className="col-span-1">
            <PhoneMockup size="small" delay={0.4}>
              <div className="h-full p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-sm font-semibold">Bookings</h3>
                  <Settings className="w-4 h-4 text-white/50" />
                </div>
                <ImageCard
                  image="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400"
                  alt="Hotel"
                  badges={["Confirmed"]}
                />
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <p className="text-white text-xs font-medium mb-1">Grand Hotel</p>
                  <p className="text-white/50 text-xs">Check-in: June 15</p>
                </div>
              </div>
            </PhoneMockup>
          </div>
          
          <div className="col-span-1">
            <PhoneMockup size="small" delay={0.5}>
              <PaymentScreen />
            </PhoneMockup>
          </div>
          
          {/* Row 3 - Dashboard hero (landscape) */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <PhoneMockup size="hero" orientation="landscape" delay={0.6} enable3D={false}>
              <DashboardScreen />
            </PhoneMockup>
          </div>
          
          {/* Medium - Calendar */}
          <div className="col-span-1">
            <PhoneMockup size="medium" delay={0.7}>
              <CalendarScreen />
            </PhoneMockup>
          </div>
          
          {/* Large - Chat */}
          <div className="col-span-1 row-span-2 hidden lg:block">
            <PhoneMockup size="large" delay={0.8}>
              <ChatScreen />
            </PhoneMockup>
          </div>
          
          {/* Row 4 - Bottom small phones */}
          <div className="col-span-1">
            <PhoneMockup size="small" delay={0.9}>
              <div className="h-full p-4 flex flex-col gap-3">
                <h3 className="text-white text-sm font-semibold">Profile</h3>
                <div className="flex flex-col items-center gap-3 flex-1 justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mesh-purple to-mesh-pink" />
                  <div className="text-center">
                    <p className="text-white text-sm font-medium">John Doe</p>
                    <p className="text-white/50 text-xs">Premium Member</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 w-full mt-2">
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <p className="text-white font-semibold">24</p>
                      <p className="text-white/50 text-xs">Trips</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2 text-center">
                      <p className="text-white font-semibold">18</p>
                      <p className="text-white/50 text-xs">Cities</p>
                    </div>
                  </div>
                </div>
              </div>
            </PhoneMockup>
          </div>
          
          <div className="col-span-1">
            <PhoneMockup size="medium" delay={1.0}>
              <div className="h-full p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-sm font-semibold">Destinations</h3>
                  <button className="text-app-light-blue text-xs">View All</button>
                </div>
                <ImageCard
                  image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400"
                  alt="Paris"
                  badges={["Popular"]}
                />
                <ScreenCard className="flex-1">
                  <h4 className="text-white text-sm font-medium mb-2">Paris, France</h4>
                  <p className="text-white/60 text-xs mb-3">The city of lights awaits you</p>
                  <div className="flex items-center justify-between">
                    <span className="text-app-light-blue font-semibold">From $599</span>
                    <button className="px-4 py-2 bg-app-light-blue/20 rounded-full text-white text-xs font-medium">
                      Explore
                    </button>
                  </div>
                </ScreenCard>
              </div>
            </PhoneMockup>
          </div>
          
          <div className="col-span-1 lg:hidden">
            <PhoneMockup size="small" delay={1.1}>
              <ChatScreen />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
};
