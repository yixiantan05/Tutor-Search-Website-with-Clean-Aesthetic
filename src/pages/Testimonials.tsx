import React from 'react';
import { StarIcon } from 'lucide-react';
const Testimonials = () => {
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'Parent of 10th grader',
    quote: "Our tutor has been a game-changer for my daughter's confidence in mathematics. Her grades have improved significantly, and she actually looks forward to her tutoring sessions!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5
  }, {
    name: 'Michael Chen',
    role: 'Parent of 7th grader',
    quote: 'After struggling with science concepts, my son is now thriving thanks to his tutor. The personalized approach and patience have made all the difference in his understanding.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 4.5
  }, {
    name: 'Amanda Rodriguez',
    role: 'Parent of 12th grader',
    quote: 'The SAT prep tutoring was exceptional. Our tutor provided targeted strategies that helped my daughter improve her score by over 200 points. Worth every penny!',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5
  }, {
    name: 'David Thompson',
    role: 'Parent of 5th grader',
    quote: "My son was falling behind in reading, but his tutor made learning fun again. The progress we've seen in just three months is remarkable. He's now reading above grade level!",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 4
  }, {
    name: 'Lisa Williams',
    role: 'Parent of 9th grader',
    quote: 'Finding a tutor who could help with advanced physics seemed impossible until we found TutorFind. The quality of instruction has been outstanding, and my daughter is now considering a STEM major in college.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 5
  }, {
    name: 'James Wilson',
    role: 'Parent of 8th grader',
    quote: "Our tutor doesn't just help with homework; they teach valuable study skills and time management. These are tools my son will use throughout his academic career.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    rating: 4.5
  }];
  const renderStars = rating => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} className="h-5 w-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" />);
    }
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<div key="half" className="relative">
          <StarIcon className="h-5 w-5 text-gray-300 dark:text-gray-700" fill="currentColor" />
          <div className="absolute inset-0 overflow-hidden" style={{
          width: '50%'
        }}>
            <StarIcon className="h-5 w-5 text-yellow-400 dark:text-yellow-500" fill="currentColor" />
          </div>
        </div>);
    }
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarIcon key={`empty-${i}`} className="h-5 w-5 text-gray-300 dark:text-gray-700" fill="currentColor" />);
    }
    return stars;
  };
  return <main className="w-full bg-white dark:bg-gray-900 ">
      <section className="py-16 md:py-24 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Trusted by Parents, Loved by Students
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-16">
          See how our tutors have helped students excel and gain confidence in every subject.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-2">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>
              <blockquote className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>)}
        </div>
      </section>
    </main>;
};
export default Testimonials;
