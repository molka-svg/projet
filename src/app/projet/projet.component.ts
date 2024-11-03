import { Component } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent {
  article = {
    title: '',
    date: '',
    description: '',
    score: 0,
    image: ''
  };
  articles: any[] = [];
  isFormVisible = false;
  chercherArticle = '';
  ta: any[] = [];

  ajout() {
    this.isFormVisible = true;  
  }

  create() {
    this.isFormVisible = false;
    this.trierArticles(); 
    this.articles.push(this.article);
    this.article = {
      title: '',
      date: '',
      description: '',
      score: 0,
      image: ''
    };
  }

  vote(article: any, type: string) {
    if (type === 'up') {
      article.score += 1;
    } else if (type === 'down') {
      article.score = Math.max(0, article.score - 1); 
    }
    this.trierArticles();
  }

  trierArticles() {
    this.articles.sort((a, b) => b.score - a.score);
  }

  filterArticles() {
    if (this.chercherArticle) {
      this.ta = this.articles.filter(article => 
        article.title.toLowerCase() === this.chercherArticle.toLowerCase()
      );
    } else {
      this.ta = [];
    }
  }
}
