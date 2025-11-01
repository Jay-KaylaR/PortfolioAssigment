// Wait until the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio script loaded successfully!");

    /* ----------------------------
       1. Interactive Button Section
       ---------------------------- */
    const paragraph = document.getElementById('paraJs');
    const buttonClick = document.getElementById('clickEffect');

    if (buttonClick && paragraph) {
        buttonClick.addEventListener('click', function() {
            paragraph.innerHTML = "Changed content courtesy of button click.";

            // Create a new div container with class 'center-box'
            const newDiv = document.createElement("div");
            newDiv.setAttribute("class", "center-box");

            // Create and configure an image
            const image = document.createElement("img");
            image.src = "assets/unnamed.jpg"; // ensure this path exists
            image.alt = "My local image";

            // Add image to the div and append div to main content
            newDiv.appendChild(image);
            document.getElementById('mainContent').appendChild(newDiv);

            // Disable button to prevent multiple inserts
            buttonClick.disabled = true;
        });
    }

    /* ----------------------------
       2. Contact Form Handling
       ---------------------------- */
    const contactUs = document.getElementById("contactForm");
    if (contactUs) {
        contactUs.addEventListener("submit", function(e) {
            e.preventDefault();

            // Retrieve input values
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phoneNo").value;
            const fname = document.getElementById("fName").value;

            // Construct a confirmation message
            const msg = `The person ${fname} — Email: ${email}, Phone: ${phone}`;
            console.log(msg);

            // Display the message dynamically in the footer
            const msgDiv = document.createElement("p");
            msgDiv.textContent = msg;
            document.getElementById("footer").appendChild(msgDiv);

            // Optional: Clear the form after submission
            contactUs.reset();
        });
    }

    /* ----------------------------
       3. Navigation Highlight Logic
       ---------------------------- */
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active-link'));
            this.classList.add('active-link');
        });
    });

    /* ----------------------------
       4. Smooth Scroll for Sections
       ---------------------------- */
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ----------------------------
       5. Dynamic Year in Footer
       ---------------------------- */
    const yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ----------------------------
       6. Responsive Menu Toggle
       ---------------------------- */
    const menuBtn = document.getElementById("menuToggle");
    const sideMenu = document.getElementById("sideMenu");

    if (menuBtn && sideMenu) {
        menuBtn.addEventListener('click', () => {
            sideMenu.classList.toggle('show-menu');
        });
    }

    console.log("All features initialized.");
});
// Scroll animation for About section
window.addEventListener('scroll', function() {
  const aboutSection = document.getElementById('about');
  const rect = aboutSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    aboutSection.classList.add('visible');
  }
});
// Reveal projects on scroll
window.addEventListener('scroll', function() {
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
});

// Contact Form Validation & Confirmation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phoneNo").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const footer = document.getElementById("footer");
    const msgDiv = document.createElement("p");
    msgDiv.classList.add("mt-3", "text-success", "fw-semibold");
    msgDiv.textContent = `Thank you, ${name}! Your message has been received. I’ll get back to you soon.`;
    footer.appendChild(msgDiv);

    contactForm.reset();
  });
}

// Automatically update footer year
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}


// Enhanced Interactive Button Functionality

document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('paraJs');
    const buttonClick = document.getElementById('clickEffect');
    const mainContent = document.getElementById('mainContent');

    buttonClick.addEventListener('click', function() {
        // Change text dynamically
        paragraph.innerHTML = "✨ Thanks for clicking! Here's a quick glimpse of my creative work and coding passion. ✨";

        // Create a new div for dynamic content
        const newDiv = document.createElement("div");
        newDiv.classList.add("center-box", "mt-4", "p-3");

        // Add an image to showcase your work (you can replace this with your own)
        const image = document.createElement("img");
        image.src = "assets/unnamed.jpg";
        image.alt = "Sample creative work";
        image.style.borderRadius = "10px";
        image.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        image.style.maxWidth = "300px";

        // Add a caption below the image
        const caption = document.createElement("p");
        caption.textContent = "A glimpse into my design and development creativity.";
        caption.style.marginTop = "10px";
        caption.style.fontStyle = "italic";

        newDiv.appendChild(image);
        newDiv.appendChild(caption);

        // Append the new content right below the Home section instead of another section
        mainContent.prepend(newDiv);

        // Give feedback on the button
        buttonClick.innerText = "You’ve Unlocked a Preview!";
        buttonClick.disabled = true;
        buttonClick.classList.replace("btn-primary", "btn-success");
    });
});
