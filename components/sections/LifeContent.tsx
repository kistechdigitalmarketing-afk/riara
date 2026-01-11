'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, Users, Home, Shirt, Clock, Heart, Trophy, Music, Palette, Users2 } from 'lucide-react';
import { coCurricularActivities, facilities } from '@/lib/data';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const activityCategories = [
  { name: 'Sports', icon: <Trophy className="w-6 h-6" />, color: 'text-blue-600' },
  { name: 'Arts', icon: <Palette className="w-6 h-6" />, color: 'text-purple-600' },
  { name: 'Academic', icon: <Activity className="w-6 h-6" />, color: 'text-green-600' },
  { name: 'Service', icon: <Heart className="w-6 h-6" />, color: 'text-red-600' },
];

const dailySchedule = [
  { time: '7:00 AM', activity: 'Wake Up & Morning Routine' },
  { time: '7:30 AM', activity: 'Breakfast' },
  { time: '8:00 AM', activity: 'Morning Assembly' },
  { time: '8:30 AM - 10:30 AM', activity: 'First Lesson Period' },
  { time: '10:30 AM - 11:00 AM', activity: 'Break Time' },
  { time: '11:00 AM - 1:00 PM', activity: 'Second Lesson Period' },
  { time: '1:00 PM - 2:00 PM', activity: 'Lunch Break' },
  { time: '2:00 PM - 4:00 PM', activity: 'Afternoon Lessons / Co-curricular Activities' },
  { time: '4:00 PM - 5:30 PM', activity: 'Sports & Recreation' },
  { time: '5:30 PM - 7:00 PM', activity: 'Study Time / Homework' },
  { time: '7:00 PM', activity: 'Dinner' },
  { time: '7:30 PM - 9:00 PM', activity: 'Evening Study / Activities' },
  { time: '9:00 PM', activity: 'Lights Out' },
];

export default function LifeContent() {
  const groupedActivities = coCurricularActivities.reduce((acc, activity) => {
    if (!acc[activity.category]) {
      acc[activity.category] = [];
    }
    acc[activity.category].push(activity);
    return acc;
  }, {} as Record<string, typeof coCurricularActivities>);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/life.png"
            alt="Life at Riara Schools"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Life at Riara Schools
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A vibrant community where students grow, learn, and thrive through 
              academics, co-curricular activities, and meaningful connections
            </p>
          </motion.div>
        </div>
      </section>

      {/* Co-curricular Activities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Activity className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Co-curricular Activities
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A wide range of activities to nurture talents, develop skills, and foster teamwork
            </p>
          </motion.div>

          <div className="space-y-12">
            {Object.entries(groupedActivities).map(([category, activities], categoryIndex) => {
              const categoryInfo = activityCategories.find(c => c.name === category) || activityCategories[0];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4 ${categoryInfo.color}`}>
                      {categoryInfo.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity, index) => (
                      <motion.div
                        key={activity.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        {activity.name === 'Football' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/football.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Basketball' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/basketball.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Swimming' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/swimming.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Athletics' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/riaraannualsports.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Tennis' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/tennis.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Music Club' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/music.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Drama Club' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/drama.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Art Club' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/art.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Science Club' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/riarasciencefair.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Debate Society' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/debate.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Environmental Club' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/environment.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : activity.name === 'Scouts & Guides' ? (
                          <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden group">
                            <Image
                              src="/images/scouts.png"
                              alt={activity.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                              <h4 className="text-lg font-bold text-white mb-2">{activity.name}</h4>
                              <p className="text-sm text-white/90">{activity.description}</p>
                            </div>
                          </div>
                        ) : (
                          <Card hover className="p-6 h-full min-h-[300px]">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">{activity.name}</h4>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                        </Card>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Welfare */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/riaraschoolwelcome.png"
                  alt="Student Welfare"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Student Welfare & Pastoral Care
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Riara Schools, we prioritize the well-being and holistic development of 
                  every student. Our comprehensive pastoral care system ensures that each 
                  student receives the support they need to thrive.
                </p>
                <p>
                  Our team of dedicated counselors, teachers, and support staff work together 
                  to provide emotional, social, and academic support. We believe that a 
                  nurturing environment is essential for student success.
                </p>
                <ul className="space-y-2 mt-6">
                  {[
                    'Individual counseling and support',
                    'Peer mentorship programs',
                    'Career guidance and counseling',
                    'Health and wellness programs',
                    'Character education initiatives',
                    'Conflict resolution and mediation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Boarding Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Home className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Boarding Facilities
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comfortable and secure boarding houses with modern amenities and pastoral care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Accommodation', description: 'Modern dormitories with comfortable living spaces, study areas, and recreational facilities' },
              { title: 'Dining', description: 'Nutritious meals prepared by professional chefs, with special dietary accommodations available' },
              { title: 'Recreation', description: 'Common areas, games rooms, and outdoor spaces for relaxation and social activities' },
              { title: 'Study Facilities', description: 'Dedicated study rooms and quiet spaces for academic work and group projects' },
              { title: 'Security', description: '24/7 security personnel and surveillance systems ensuring student safety' },
              { title: 'Pastoral Care', description: 'House parents and counselors available around the clock for support and guidance' },
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {facility.title === 'Accommodation' ? (
                  <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden group">
                    <Image
                      src="/images/housing.png"
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                      <p className="text-white/90 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                ) : facility.title === 'Dining' ? (
                  <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden group">
                    <Image
                      src="/images/dinning.png"
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                      <p className="text-white/90 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                ) : facility.title === 'Recreation' ? (
                  <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden group">
                    <Image
                      src="/images/recreation.png"
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                      <p className="text-white/90 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                ) : facility.title === 'Study Facilities' ? (
                  <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden group">
                    <Image
                      src="/images/facility.png"
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                      <p className="text-white/90 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                ) : facility.title === 'Security' ? (
                  <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden group">
                    <Image
                      src="/images/security.png"
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                      <p className="text-white/90 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                ) : facility.title === 'Pastoral Care' ? (
                  <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden group">
                    <Image
                      src="/images/staff.png"
                      alt={facility.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-300" />
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white mb-3">{facility.title}</h3>
                      <p className="text-white/90 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                ) : (
                  <Card hover className="p-6 h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Uniform */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Shirt className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  School Uniform
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our school uniform reflects our identity and promotes a sense of belonging 
                  and pride in the school community. All students are required to wear the 
                  official school uniform during school hours and at school functions.
                </p>
                <div className="mt-6 space-y-3">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Primary School Uniform</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Navy blue shorts/skirt with white shirt</li>
                      <li>• School tie and blazer (winter)</li>
                      <li>• Black shoes and white socks</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Secondary School Uniform</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Navy blue trousers/skirt with white shirt</li>
                      <li>• School tie and blazer (required)</li>
                      <li>• Black leather shoes and white socks</li>
                      <li>• PE uniform for physical education classes</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Button asLink href="/contact" variant="primary">
                    Contact for Uniform Details
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80"
                  alt="School Uniform"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Daily Schedule (Boarding Students)
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured daily routine balancing academics, activities, and rest
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-4">
                {dailySchedule.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex items-start border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex-shrink-0 w-32 font-semibold text-primary-600">
                      {schedule.time}
                    </div>
                    <div className="flex-1 text-gray-700">
                      {schedule.activity}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Day students follow a similar schedule during school hours 
                  (7:30 AM - 4:00 PM). Schedule may vary by level and specific activities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Life at Riara Schools
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Schedule a school tour to see our facilities and experience the vibrant 
              community at Riara Schools firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asLink
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Schedule a Tour
              </Button>
              <Button
                asLink
                href="/admissions"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Apply Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
