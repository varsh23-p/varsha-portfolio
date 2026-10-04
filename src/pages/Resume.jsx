import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const skills = [
    "Java",
    "SQL",
    "DSA",
    "OOP",
    "DBMS",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "Power BI",
    "Excel",
  ];

  return (
    <section
      className="container"
      style={{
        padding: "60px 0",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 28,
            color: "#00b4ff",
            marginBottom: 12,
          }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: "#aaa",
            marginBottom: 25,
          }}
        >
          A snapshot of my academic journey, technical skills, and projects.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 25,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 24,
                color: "#00b4ff",
                marginBottom: 8,
              }}
            >
              👩🏻‍💻 Varsha D. Patil
            </h3>

            <p
              style={{
                margin: "6px 0",
                fontSize: 15,
                color: "#ccc",
              }}
            >
              B.Tech Information Technology | MPSTME, NMIMS University
            </p>

            <p
              style={{
                margin: "6px 0",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              Shirpur, Maharashtra
            </p>

            <p
              style={{
                margin: "6px 0",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              ✉️ varshadpatil23@gmail.com
            </p>

            <p
              style={{
                margin: "6px 0",
                fontSize: 14,
                color: "#aaa",
              }}
            >
              📞 +91 86690 20577
            </p>
          </div>

          {/* Professional Summary */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background:
                "linear-gradient(135deg, #00b4ff22, #0b0b0b)",
              borderRadius: 12,
              padding: "16px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>
              Professional Summary
            </strong>

            <p
              style={{
                marginTop: 8,
                color: "#ccc",
              }}
            >
              B.Tech Information Technology student with a strong interest in
              Web Development and Data Analytics. Skilled in Java, SQL, DSA,
              DBMS, Power BI, HTML, CSS, JavaScript, PHP, and MySQL. Interested
              in building practical, user-friendly, and data-driven solutions.
            </p>
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 15,
            }}
          >
            🎓 Education
          </h4>

          <div style={{ lineHeight: 1.7 }}>
            <div style={{ marginBottom: 18 }}>
              <strong>B.Tech in Information Technology</strong>
              <br />
              M.P.S.T.M.E, NMIMS University | 2024 – 2027
              <br />
              <span style={{ color: "#aaa" }}>
                CGPA: 7.5 / 10
              </span>
            </div>

            <div style={{ marginBottom: 18 }}>
              <strong>Diploma in Computer Engineering</strong>
              <br />
              R.C. Patel Polytechnic, Shirpur | 2021 – 2024
              <br />
              <span style={{ color: "#aaa" }}>
                Percentage: 78.51%
              </span>
            </div>

            <div>
              <strong>SSC – Maharashtra State Board</strong>
              <br />
              P.B.M. Municipal High School, Shirpur | 2020 – 2021
              <br />
              <span style={{ color: "#aaa" }}>
                Percentage: 85.00%
              </span>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 15,
            }}
          >
            💼 Training Experience
          </h4>

          <strong>
            Full Stack Web Development Trainee
          </strong>

          <p
            style={{
              color: "#ccc",
              margin: "5px 0",
            }}
          >
            InnovationsHub Services Pvt. Ltd., Nashik
          </p>

          <p
            style={{
              color: "#aaa",
              fontSize: 14,
              margin: "5px 0",
            }}
          >
            Jun 2023 – Jul 2023 | 45 Days
          </p>

          <p
            style={{
              color: "#bbb",
              lineHeight: 1.6,
            }}
          >
            Worked on full-stack web development using HTML, CSS, JavaScript,
            Bootstrap, PHP, and MySQL. Gained practical experience in
            database-driven applications, debugging, and project presentation.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 15,
            }}
          >
            ⚙️ Technical Skills
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(0,180,255,0.25)",
                }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "7px 13px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 35 }}
        >
          <h4
            style={{
              fontSize: 20,
              color: "#00b4ff",
              marginBottom: 15,
            }}
          >
            🌟 Soft Skills
          </h4>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {[
              "Analytical Thinking",
              "Problem-Solving",
              "Team Collaboration",
              "Time Management",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "7px 13px",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#ccc",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            {
              name: "🏆 LeetCode",
              link: "https://leetcode.com/u/varshap23/",
            },
            {
              name: "💻 GitHub",
              link: "https://github.com/varsh23-p",
            },
            {
              name: "💼 LinkedIn",
              link: "https://www.linkedin.com/",
            },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.1,
                color: "#00b4ff",
              }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          style={{
            marginTop: 50,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src="/resume.pdf"
            title="Varsha Patil Resume"
            style={{
              width: "100%",
              height: "650px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>

        {/* Download Button */}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "inline-block",
              marginTop: 20,
              background: "#00b4ff",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 500,
              letterSpacing: 0.3,
            }}
          >
            ⬇️ Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}