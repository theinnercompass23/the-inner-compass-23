import React from "react";
import { Award, UserCheck, Heart, Compass } from "lucide-react";

interface MeetFounderSectionProps {
  className?: string;
  id?: string;
}

export default function MeetFounderSection({
  className = "",
  id = "founder",
}: MeetFounderSectionProps) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 bg-warm-white border-t border-soft-sage/30 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Award className="w-3.5 h-3.5 text-muted-green" />
            Leadership &bull; 25+ Years Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
            Meet Our Founder
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70">
            The driving force behind The Inner Compass 23 and SCOUT (Social Confidence Lab).
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-soft-sage/40 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-soft-sage/30 text-muted-green flex items-center justify-center font-bold text-xl shrink-0 border-2 border-muted-green/30 shadow-xs">
              <UserCheck className="w-10 h-10" />
            </div>
            <div className="text-center sm:text-left space-y-1">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
                Dr. Aarti Aggarwal, MPT
              </h3>
              <div className="text-xs sm:text-sm font-semibold text-muted-green">
                Founder &bull; CEO &bull; Healthcare &amp; Whole-Person Wellness Leader
              </div>
              <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed pt-2">
                Dr. Aarti has spent more than 25 years in healthcare, always with one aim: helping people live better. She holds an MPT in Musculoskeletal and Sports Physiotherapy and has served as a hospital Head of Department, taught at academic institutions, and run her own clinic for over 15 years. Her interest in whole-person wellness led her to study Chinese medicine, acupuncture and acupressure, as well as astrology. Today she offers astrology consultations and counselling that support skill development, emotional healing, and social confidence. She believes real well-being is more than physical health—it also covers how a person feels, connects with others, and experiences the world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-soft-sage/30">
            <div className="space-y-2">
              <h4 className="text-sm font-serif font-bold text-dark-charcoal flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-muted-green" />
                <span>The Inspiration</span>
              </h4>
              <p className="text-xs text-dark-charcoal/75 leading-relaxed">
                In her years of clinical practice, Dr. Aarti met many individuals and children whose difficulties went well beyond the physical. Hardship and emotional isolation often left them with lower confidence, a weaker sense of belonging, and real emotional strain. She noticed that even when physical treatment worked, the emotional and social side often went unattended. The lesson stayed with her: a person thrives when they are healthy, but also when they feel heard, accepted, and connected.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-serif font-bold text-dark-charcoal flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-muted-green" />
                <span>The Vision</span>
              </h4>
              <p className="text-xs text-dark-charcoal/75 leading-relaxed">
                Dr. Aarti pictures a world where every person and every child, whatever their ability, personality, or circumstances, has the confidence and safe space to be heard. The Inner Compass 23 and SCOUT are her steps toward that goal: welcoming, inclusive spaces where individuals can practice communicating, put feelings into words, build relationships, and feel at ease as they are. Everyone deserves to take part, connect, and belong.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
