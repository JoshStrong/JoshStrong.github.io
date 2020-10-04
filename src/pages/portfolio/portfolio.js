import React, { useState } from "react";
import PageTemplate from "../../components/pageTemplate/pageTemplate";
import { ReactComponent as FolderSvg } from "../../assets/svg/folder.svg";
import { ReactComponent as GithubSvg } from "../../assets/svg/github.svg";
import "./portfolio.css";

export default function Portfolio(props) {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = [
    {
      title: "Model-Agnostic Meta-Learning for Few-Shot Deep Learning",
      link: "https://github.com/JoshStrong/MAML",
      info:
        "This project involved implementing the few-shot meta-learning algorithm MAML, of which helps deep learning models quickly adapt to machine learning problems with small amounts of data. I implement an original experimental study conducted in the academic article which presented MAML, but added extra complexity to see how well this algorithm truly copes. This work was written in Python.",
    },
    {
      title: "CNN-tuning",
      link: "https://github.com/JoshStrong/CNN-tuning/",
      info:
        "Written in Julia, this notebook includes tuning hyperparameters of a convolutional neural network to optimise for minimal cross-entropy loss. In doing so, 9 model variants are developed with increasing generalisation performance. The final model involves 3x3 filters with 99.44% validation accuracy, 99.18% testing accuracy and 100% training accuracy.",
    },
    {
      title: "2 Layer MLP from scratch",
      link: "https://github.com/JoshStrong/2LayerMLP",
      info:
        "This notebook implements a 2 layer MLP from scratch, without using any autodiff libraries. Various methods of optimisation are then implemented and applied to optimise instances of the network, with a grid search used to find optimial hyperparamters based on performance on a validation data set. Although not the most efficient implementation, this notebook is a simple demonstration with primary purpose to further my understanding on the mathematics & theory of deep learning.",
    },
  ];
  return (
    //test
    <PageTemplate
      headingRows={["Portfolio"]}
      subHeading="A sample of some completed data science and coding projects"
    >
      <div className="projectContainer">
        <div className="projectContainer__navigation">
          {projects.map((project, index) => {
            return (
              <div
                className={
                  index === projectIndex
                    ? "projectContainer__navigationItem projectContainer__navigationItem--active"
                    : "projectContainer__navigationItem"
                }
                onClick={() => setProjectIndex(index)}
              >
                <FolderSvg />
                <h3>{project.title}</h3>
              </div>
            );
          })}
        </div>
        <div className="projectContainer__projectInfo">
          <div className="projectContainer__projectInfoHeader">
            <h2>{projects[projectIndex].title}</h2>
            <a href={projects[projectIndex].link} target="_blank">
              <GithubSvg />
            </a>
          </div>
          <p>{projects[projectIndex].info}</p>
        </div>
      </div>
    </PageTemplate>
  );
}
