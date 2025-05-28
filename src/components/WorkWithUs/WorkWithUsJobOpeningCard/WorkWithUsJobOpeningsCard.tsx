import { Button, Collapse } from "antd";
import React from "react";
import "./style.css";

const { Panel } = Collapse;

type JobOpening = {
  title: string;
  description: string;
  postedDate: string;
  desiredKeySkills: string[];
  location: string;
};

interface WorkWithUsJobOpeningsCardProps {
  jobOpenings: JobOpening[];
}

const WorkWithUsJobOpeningsCard: React.FC<WorkWithUsJobOpeningsCardProps> = ({
  jobOpenings,
}) => {
  // const [cvFiles, setCvFiles] = useState<{ [key: number]: File | null }>({});
  // const [filePreviews, setFilePreviews] = useState<{
  //   [key: number]: string | null;
  // }>({});
  // const [cvFileSizeErrors, setCvFileSizeErrors] = useState<{
  //   [key: number]: boolean;
  // }>({});

  // const handleCvUpload = (file: any, jobIndex: number) => {
  //   const isPdf = file.type === "application/pdf";
  //   const isDoc =
  //     file.type === "application/msword" ||
  //     file.type ===
  //       "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  //   const fileSize = file.size / 1024 / 1024; // in MB

  //   if (!isPdf && !isDoc) {
  //     message.error("You can only upload PDF or DOC files.");
  //     return false;
  //   }

  //   if (fileSize > 8) {
  //     message.error("File size exceeds 8MB. Please upload a smaller file.");
  //     setCvFileSizeErrors((prevErrors) => ({
  //       ...prevErrors,
  //       [jobIndex]: true,
  //     }));
  //     return false;
  //   }

  //   setCvFiles((prevFiles) => ({ ...prevFiles, [jobIndex]: file }));

  //   // Set file preview
  //   if (isPdf) {
  //     setFilePreviews((prevPreviews) => ({
  //       ...prevPreviews,
  //       [jobIndex]: URL.createObjectURL(file),
  //     }));
  //   } else if (isDoc) {
  //     setFilePreviews((prevPreviews) => ({
  //       ...prevPreviews,
  //       [jobIndex]: file.name,
  //     }));
  //   }

  //   setCvFileSizeErrors((prevErrors) => ({ ...prevErrors, [jobIndex]: false }));
  //   return false;
  // };

  // const handleSubmitCv = (jobIndex: number) => {
  //   if (!cvFiles[jobIndex]) {
  //     message.error("Please upload your CV before submitting.");
  //     return;
  //   }
  //   message.success("CV submitted successfully!");
  // };

  // const handleDeleteFile = (jobIndex: number) => {
  //   setCvFiles((prevFiles) => ({ ...prevFiles, [jobIndex]: null }));
  //   setFilePreviews((prevPreviews) => ({ ...prevPreviews, [jobIndex]: null }));
  //   message.success("File deleted successfully!");
  // };

  // const handleFileClick = (jobIndex: number) => {
  //   if (filePreviews[jobIndex]) {
  //     window.open(filePreviews[jobIndex] as string, "_blank");
  //   }
  // };

  return (
    <Collapse
      bordered={false}
      expandIconPosition="right"
      defaultActiveKey={[]}
      className="custom-collapse"
      expandIcon={({ isActive }) => (
        <span className={`custom-arrow ${isActive ? "active" : ""}`}>
          {isActive ? "▲" : "▼"}
        </span>
      )}
    >
      {jobOpenings.map((job, index) => (
        <Panel header={job.title} key={index} className="custom-panel">
          <div className="work-with-us-job-descrition">
            <div className="postedDate">Posted On : {job.postedDate}</div>
            <div className="job-desc-heading">Job Description</div>
            <div className="job-desc-description">{job.description}</div>
            <div className="job-desc-heading">Desired Key Skills</div>
            <ul className="desired-skills-list">
              {job.desiredKeySkills.map((skill, idx) => (
                <li key={idx} className="desired-skill-item">
                  {skill}
                </li>
              ))}
            </ul>
            <div className="job-desc-heading">Location</div>
            <div className="job-desc-description">{job.location}</div>

            {/* CV Upload Section */}
            <div className="cv-upload-section">
              {/* <div className="job-desc-heading">Upload Your CV</div>
              <div style={{ marginTop: "0.5rem" }}>
                <Upload
                  beforeUpload={(file) => handleCvUpload(file, index)}
                  showUploadList={false}
                  accept=".pdf, .doc, .docx"
                >
                  <Button icon={<UploadOutlined />}>
                    Click here to upload
                  </Button>
                  <div style={{ marginTop: "0.3rem", color: "gray" }}>
                    Recommended size is 8mb
                  </div>
                </Upload>
              </div> */}

              {/* {cvFiles[index] && filePreviews[index] && (
                <Card className="cv-uploaded-card">
                  <div>
                    <div>{cvFiles[index]?.name}</div>
                    <div>
                      <Tooltip title="View uploaded cv">
                        <Button
                          type="link"
                          style={{ color: "white" }}
                          icon={<EyeOutlined />}
                          onClick={() => handleFileClick(index)}
                        />
                      </Tooltip>
                      <Tooltip title="Delete uploaded cv">
                        <Button
                          type="link"
                          style={{ color: "white" }}
                          icon={<DeleteOutlined />}
                          onClick={() => handleDeleteFile(index)}
                          danger
                        />
                      </Tooltip>
                    </div>
                  </div>
                </Card>
              )} */}

              {/* {cvFileSizeErrors[index] && (
                <div className="cv-upload-error">
                  File size exceeds the 8MB limit.
                </div>
              )} */}

              <div>
                <Button
                  size="large"
                  onClick={() => {
                    const email = "info@corpuslifescience.com"; 
                    const subject = `CV Submission for Job : ${job.title}`;
                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
                  }}
                  type="primary"
                  className="submit-cv-button"
                >
                  Submit CV
                </Button>
              </div>
            </div>
          </div>
        </Panel>
      ))}
    </Collapse>
  );
};

export default WorkWithUsJobOpeningsCard;
